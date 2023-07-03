import registrationCourseEntity from "../../../entities/registration_course.js";

const add = function ({
                          idNumber,
                          name,
                          termId,
                          termCourseId,
                          professorName,
                          capacity,
                          classDateTime,
                          examDateTime,
                          isPreReg,
                          registrationCourseRepository
                      }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const newStudent = registrationCourseEntity({
            idNumber,
            termId,
            termCourseId,
            isPreReg,
            name, professorName,
            capacity,
            classDateTime,
            examDateTime,
        }
    );

    return registrationCourseRepository.add(newStudent);
}


export default add

