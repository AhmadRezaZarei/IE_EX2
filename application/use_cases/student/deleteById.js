const deleteById = function ({
                                 idNumber,
                                 studentRepository
                             }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return studentRepository.deleteById(idNumber)
}


export default deleteById

