const findAll = function ({
                              termRepository
                          }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return termRepository.findAll()
}


export default findAll

