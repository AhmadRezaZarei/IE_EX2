
const findById = function ({
                               idNumber,
                               professorRepository
                           }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return professorRepository.findById(idNumber)
}


export default findById

//module.exports.addProfessor = addProfessor;
