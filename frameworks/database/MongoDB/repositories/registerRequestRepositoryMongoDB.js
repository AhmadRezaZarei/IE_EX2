import RegisterRequestModel from "../models/register_request.js";


const registerRequestRepositoryMongoDB = function () {


    const findAll = (studentIdNumber, termIdNumber, isPreReg) => RegisterRequestModel.find({
        studentIdNumber: studentIdNumber,
        termIdNumber: termIdNumber,
        isPreReg: isPreReg
    })

    const register = (regRequestEntity) => {

        const newReq = new RegisterRequestModel({
            idNumber: regRequestEntity.getIdNumber(),
            studentIdNumber: regRequestEntity.getStudentIdNumber(),
            reqCourseIdNumber: regRequestEntity.getReqCourseIdNumber(),
            isPreReg: regRequestEntity.isPreReq(),
            termIdNumber: regRequestEntity.getTermIdNumber()
        })

        return newReq.save()

    }


    const unregister = (id) => RegisterRequestModel.deleteOne({idNumber: id})


    return {
        register,
        unregister,
        findAll,
    }

}

export default registerRequestRepositoryMongoDB;