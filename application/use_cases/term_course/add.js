import termCourse from "../../../entities/termCourse.js"

const addTermCourse = function ({
                                    idNumber,
                                    courseId,
                                    courseDataAndTime,
                                    examDataAndTime,
                                    location,
                                    professorId,
                                    capacity,
                                    termId,
                                    termCourseRepository
                                }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const newCourse = termCourse({
        idNumber,
        courseId,
        courseDataAndTime,
        examDataAndTime,
        location,
        professorId,
        capacity,
        termId
    });

    return termCourseRepository.add(newCourse);
}


export default addTermCourse

//module.exports.addProfessor = addProfessor;
