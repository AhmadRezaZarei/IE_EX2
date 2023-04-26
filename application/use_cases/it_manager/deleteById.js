const deleteById = function ({
                                 idNumber,
                                 itManagerRepository
                             }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return itManagerRepository.deleteById(idNumber)
}


export default deleteById

