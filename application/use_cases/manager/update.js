import manager from "../../../entities/manager.js"

const update = function ({
                             firstName,
                             lastName,
                             idNumber,
                             password,
                             email,
                             phone,
                             itManagerRepository
                         }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const managerEntity = manager({firstName, lastName, idNumber, password, email, phone});

    return itManagerRepository.updateById(idNumber, managerEntity);
}


export default update

//module.exports.addProfessor = addProfessor;
