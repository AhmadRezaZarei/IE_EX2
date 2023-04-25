import professor from "../../../entities/professor.js"

const addProfessor = function ({
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

    const newPost = professor({firstName, lastName, idNumber, password, email, phone, faculty, fieldOfStudy, rank});




    console.log(professorRepository)

    return professorRepository.add(newPost);
}


export default addProfessor

//module.exports.addProfessor = addProfessor;
