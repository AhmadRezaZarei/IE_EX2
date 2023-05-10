
const findById = function ({
                               idNumber,
                               termCourseRepository
                           }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    return termCourseRepository.findById(idNumber)
}


export default findById

//module.exports.addProfessor = addProfessor;
