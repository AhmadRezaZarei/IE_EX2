const findAll = function ({
                              studentRepository
                          }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return studentRepository.findAll()
}


export default findAll

