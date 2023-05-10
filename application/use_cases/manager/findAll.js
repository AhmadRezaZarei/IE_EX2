const findAll = function ({
                              managerRepository
                          }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return managerRepository.findAll()
}


export default findAll

