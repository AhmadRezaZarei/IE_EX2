const deleteById = function ({
                                 idNumber,
                                 termCourseRepository
                             }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return termCourseRepository.deleteById(idNumber)
}


export default deleteById

