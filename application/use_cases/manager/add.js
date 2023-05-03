import manager from "../../../entities/manager.js"

const addManager = function ({
                                   firstName,
                                   lastName,
                                   idNumber,
                                   password,
                                   email,
                                   phone,
                                   itManagerRepository
                               }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const newItManager = manager({firstName, lastName, idNumber, password, email, phone});

    return itManagerRepository.add(newItManager);
}


export default addManager

//module.exports.addProfessor = addProfessor;
