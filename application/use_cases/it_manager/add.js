import itManager from "../../../entities/itManager.js"

const addItManager = function ({
                                   firstName,
                                   lastName,
                                   idNumber,
                                   password,
                                   email,
                                   phone,
                                   itManagerRepository
                               }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const newItManager = itManager({firstName, lastName, idNumber, password, email, phone});

    return itManagerRepository.add(newItManager);
}


export default addItManager

//module.exports.addProfessor = addProfessor;
