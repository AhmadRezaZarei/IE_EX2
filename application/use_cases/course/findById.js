
const findById = function ({
                               idNumber,
                               courseRepository
                           }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return courseRepository.findById(idNumber)
}


export default findById

//module.exports.addProfessor = addProfessor;
