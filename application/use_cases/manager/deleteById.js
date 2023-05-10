const deleteById = function ({
                                 idNumber,
                                 managerRepository
                             }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return managerRepository.deleteById(idNumber)
}


export default deleteById

