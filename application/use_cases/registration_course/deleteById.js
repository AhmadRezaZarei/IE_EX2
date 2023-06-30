const deleteById = function ({
                                 idNumber,
                                 registrationCourseRepository
                             }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return registrationCourseRepository.deleteById(idNumber)
}


export default deleteById

