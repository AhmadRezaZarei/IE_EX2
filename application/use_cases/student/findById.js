
const findById = function ({
                               idNumber,
                               studentRepository
                           }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return studentRepository.findById(idNumber)
}


export default findById

//module.exports.addProfessor = addProfessor;
