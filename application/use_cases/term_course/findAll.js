const findAll = function ({
                              termCourseRepository
                          }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return termCourseRepository.findAll()
}


export default findAll

