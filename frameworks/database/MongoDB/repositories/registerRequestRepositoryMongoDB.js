import RegisterRequestModel from "../models/register_request.js";


const registerRequestRepositoryMongoDB = function () {


    const findAll = (studentIdNumber, termIdNumber, isPreReg) => RegisterRequestModel.find({
        studentIdNumber: studentIdNumber,
        termIdNumber: termIdNumber,
        isPreReg: isPreReg
    })

    const register = (regRequestEntity) => {


        console.log("idNumber", regRequestEntity.getIdNumber())
        console.log("studnetIdNumber", regRequestEntity.getStudentIdNumber())
        console.log("reqCourseIdNumber", regRequestEntity.getReqCourseIdNumber())
        console.log("isPreReq", regRequestEntity.isPreReq())
        console.log("termIdNumber", regRequestEntity.getTermIdNumber())

        const newReq = new RegisterRequestModel({
            idNumber: regRequestEntity.getIdNumber(),
            studentId: regRequestEntity.getStudentIdNumber(),
            regCourseId: regRequestEntity.getReqCourseIdNumber(),
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