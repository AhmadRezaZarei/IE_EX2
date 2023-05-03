const findAll = function ({
                              itManagerRepository
                          }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return itManagerRepository.findAll()
}


export default findAll

