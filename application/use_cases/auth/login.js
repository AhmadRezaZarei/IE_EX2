import course from "../../../entities/course.js"

const addCourse = function ({
                                email,
                                password,
                                role,
                                authRepository
                            }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const newCourse = course({name, idNumber, prerequisites, corequisites, unitCount});

    return courseRepository.add(newCourse);
}

export default addCourse
