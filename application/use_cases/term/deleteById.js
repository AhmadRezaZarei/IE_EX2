const deleteById = function ({
                                 idNumber,
                                 termRepository
                             }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return termRepository.deleteById(idNumber)
}


export default deleteById

