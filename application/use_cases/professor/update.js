import professor from "../../../entities/professor.js"

const update = function ({
                                   firstName,
                                   lastName,
                                   idNumber,
                                   password,
                                   email,
                                   phone,
                                   faculty,
                                   fieldOfStudy,
                                   rank,
                                   professorRepository
                               }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const prof = professor({firstName, lastName, idNumber, password, email, phone, faculty, fieldOfStudy, rank});

    return professorRepository.updateById(idNumber, prof);
}


export default update

//module.exports.addProfessor = addProfessor;
