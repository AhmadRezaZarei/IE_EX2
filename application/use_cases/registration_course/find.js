const find = function ({
                           termId,
                           isPreReg,
                           registrationCourseRepository
                       }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return registrationCourseRepository.find(termId, isPreReg)
}


export default find

