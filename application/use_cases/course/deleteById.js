const deleteById = function ({
                                 idNumber,
                                 courseRepository
                             }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return courseRepository.deleteById(idNumber)
}


export default deleteById

