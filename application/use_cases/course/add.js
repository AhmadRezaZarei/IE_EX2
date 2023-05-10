import course from "../../../entities/course.js"

const addCourse = function ({
                                name,
                                idNumber,
                                prerequisites,
                                corequisites,
                                unitCount,
                                fieldOfStudy,
                                courseRepository,

                            }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const newCourse = course({name, idNumber, prerequisites, corequisites, unitCount, fieldOfStudy});

    return courseRepository.add(newCourse);
}


export default addCourse

//module.exports.addProfessor = addProfessor;
