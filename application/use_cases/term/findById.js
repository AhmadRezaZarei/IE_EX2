
const findById = function ({
                               idNumber,
                               termRepository
                           }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return termRepository.findById(idNumber)
}


export default findById

//module.exports.addProfessor = addProfessor;
