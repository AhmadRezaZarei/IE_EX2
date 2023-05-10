import manager from "../../../entities/manager.js"

const addManager = function ({
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

    const newManager = manager({firstName, lastName, idNumber, password, email, phone, faculty});

    return managerRepository.add(newManager);
}

export default addManager

//module.exports.addProfessor = addProfessor;
