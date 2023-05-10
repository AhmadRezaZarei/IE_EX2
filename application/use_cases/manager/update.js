import manager from "../../../entities/manager.js"

const update = function ({
                             firstName,
                             lastName,
                             idNumber,
                             password,
                             email,
                             phone,
                             faculty,
                             managerRepository
                         }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const managerEntity = manager({firstName, lastName, idNumber, password, email, phone, faculty});

    return managerRepository.updateById(idNumber, managerEntity);
}


export default update
