const unregister = function ({
                                 idNumber,
                                 registerRequestRepository
                             }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return registerRequestRepository.unregister(idNumber)
}


export default unregister

