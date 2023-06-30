const findAll = function ({
                              studentIdNumber,
                              termIdNumber,
                              isPreReg,
                              registerRequestRepository
                          }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return registerRequestRepository.findAll(studentIdNumber, termIdNumber, isPreReg)
}


export default findAll

