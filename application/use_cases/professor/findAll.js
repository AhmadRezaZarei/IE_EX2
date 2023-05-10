const findAll = function ({
                              professorRepository
                          }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return professorRepository.findAll()
}


export default findAll

