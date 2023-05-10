const findAll = function ({
                              fieldOfStudy,
                              courseRepository
                          }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return courseRepository.findAll(fieldOfStudy)
}


export default findAll

