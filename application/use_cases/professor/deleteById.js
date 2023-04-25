const deleteById = function ({
                                 idNumber,
                                 professorRepository
                             }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return professorRepository.deleteById(idNumber)
}


export default deleteById

