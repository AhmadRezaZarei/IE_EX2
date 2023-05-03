const findAll = function ({
                              courseRepository
                          }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return courseRepository.findAll()
}


export default findAll

