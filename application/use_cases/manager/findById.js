const findById = function ({
                               idNumber,
                               managerRepository
                           }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return managerRepository.findById(idNumber)
}


export default findById
