
const findById = function ({
                               idNumber,
                               itManagerRepository
                           }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return itManagerRepository.findById(idNumber)
}


export default findById

//module.exports.addProfessor = addProfessor;
