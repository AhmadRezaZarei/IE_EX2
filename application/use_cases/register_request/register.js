import registerRequestEntity from "../../../entities/register_request.js"

const register = function ({
                               idNumber,
                               studentIdNumber,
                               termIdNumber,
                               regCourseIdNumber,
                               isPreReg,
                               registerRequestRepository
                           }) {


    // TODO: add a proper validation (consider using @hapi/joi)

    const newReq = registerRequestEntity({
        idNumber,
        studentIdNumber,
        isPreReg,
        regCourseIdNumber,
        termIdNumber
    });

    return registerRequestRepository.register(newReq);
}

export default register

//module.exports.addProfessor = addProfessor;