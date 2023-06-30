import registrationCourseEntity from "../../../entities/registration_course.js";

const add = function ({
                                   idNumber,
                                   termId,
                                   termCourseId,
                                   isPreReg,
                                   registrationCourseRepository
                               }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const newStudent = registrationCourseEntity({
            idNumber,
            termId,
            termCourseId,
            isPreReg,
        }
    );

    return registrationCourseRepository.add(newStudent);
}


export default add

