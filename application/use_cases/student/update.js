import student from "../../../entities/student.js"

const update = function ({
                             firstName,
                             lastName,
                             idNumber,
                             password,
                             email,
                             phone,
                             grade,
                             entranceYear,
                             mean,
                             faculty,
                             fieldOfStudy,
                             studentRepository
                         }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const newStudent = student({
            firstName,
            lastName,
            idNumber,
            password,
            email,
            phone,
            grade,
            entranceYear,
            mean,
            faculty,
            fieldOfStudy
        }
    );

    return studentRepository.add(newStudent);
}


export default update

//module.exports.addProfessor = addProfessor;
