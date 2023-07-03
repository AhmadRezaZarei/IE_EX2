import register from "../../application/use_cases/register_request/register.js"
import unregister from "../../application/use_cases/register_request/unregister.js"
import findAll from "../../application/use_cases/register_request/findAll.js";

const registerRequestController = function (
    registerRequestDbRepository,
    registerRequestDbRepositoryImpl
) {

    const internalServerError = {error: "Unknown error", errorCode: 500}

    const registerRequestRepository = registerRequestDbRepository(registerRequestDbRepositoryImpl())

    const fetchRegisterRequest = (req, res, next) => {

        const termIdNumber = req.params.id
        const isPreReg = req.query.isPreReg
        const studentIdNumber = req.query.studentIdNumber

        findAll({
            isPreReg,
            termIdNumber,
            studentIdNumber,
            registerRequestRepository
        }).then(registrationCourses => {
            res.json({registerRequest: registrationCourses})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const registerRequest = (req, res, next) => {


        let studentIdNumber = req.idNumber


        const idNumber = Date.now() // register request id number
        const regCourseIdNumber = req.params.id

        const isPreReg = req.query.isPreReg

        const {
            termIdNumber
        } = req.body


        console.log("isPreReg", isPreReg)
        console.log("sutdnetIdNumber", studentIdNumber)
        console.log("regCourseIdNumber", regCourseIdNumber)
        console.log("termIdNumber", termIdNumber)

        register({
                idNumber,
                studentIdNumber,
                termIdNumber,
                regCourseIdNumber,
                isPreReg,
                registerRequestRepository
            }
        ).then(term => {
            res.json({registerRequest: term})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const unregisterRequest = (req, res, next) => {

        const reqRequestIdNumber = req.params.id
        const studentIdNumber = req.params.studentIdNumber

        unregister({idNumber: reqRequestIdNumber, registerRequestRepository})
            .then(course => {
                res.json({registerRequest: course})
            }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }


    return {
        fetchRegisterRequest,
        registerRequest,
        unregisterRequest
    }


}


export default registerRequestController;
