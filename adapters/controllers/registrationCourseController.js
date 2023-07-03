import add from "../../application/use_cases/registration_course/add.js"

import deleteById from "../../application/use_cases/registration_course/deleteById.js";
import find from "../../application/use_cases/registration_course/find.js";

const registrationCourseController = function (
    registrationCourseDbRepository,
    registrationCourseDbRepositoryImpl
) {

    const internalServerError = {error: "Unknown error", errorCode: 500}

    const registrationCourseRepository = registrationCourseDbRepository(registrationCourseDbRepositoryImpl())

    const fetchRegistrationCourses = (req, res, next) => {

        const termId = req.params.id
        const isPreReg = req.query.isPreReg


        find({
            termId,
            isPreReg,
            registrationCourseRepository
        }).then(registrationCourses => {
            // res.json({
            //     semester: {
            //         name: "semester1"
            //     },
            //     registrationCourses: [{
            //         name: "name1",
            //         id: 1,
            //         studentLength: 10
            //     }]
            // })

              res.json({registrationCourses: registrationCourses})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const addRegistrationCourse = (req, res, next) => {

        const idNumber = Date.now()
        const isPreReg = req.query.isPreReg

        const termId = req.params.id
        const {
            name,
            professorName,
            capacity,
            classDateTime,
            examDateTime
        } = req.body

        const termCourseId = "dummy"

        add({
                idNumber,
                termId,
                termCourseId,
                professorName,
                capacity,
                classDateTime,
                examDateTime,
                name,
                isPreReg,
                registrationCourseRepository
            }
        ).then(term => {
            res.json({registrationCourse: term})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const deleteRegistrationCourse = (req, res, next) => {

        const termId = req.params.id
        const idNumber = req.query.regId


        deleteById({idNumber: idNumber, registrationCourseRepository})
            .then(course => {
                res.json({registrationCourse: course})
            }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }


    return {
        fetchRegistrationCourses,
        deleteRegistrationCourse,
        addRegistrationCourse
    }


}


export default registrationCourseController;
