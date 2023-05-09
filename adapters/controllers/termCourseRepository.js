import addTermCourse from "../../application/use_cases/term_course/add.js";
import termCourse from "../../entities/termCourse.js"
import findById from "../../application/use_cases/term_course/findById.js";
import findAll from "../../application/use_cases/term_course/findAll.js";
import deleteById from "../../application/use_cases/term_course/deleteById.js";
import update from "../../application/use_cases/term_course/update.js";

const termCourseController = function (
    termCourseDbRepository,
    termCourseDbRepositoryImpl
) {

    const internalServerError = {error: "Unknown error", errorCode: 500}

    const termCourseRepository = termCourseDbRepository(termCourseDbRepositoryImpl())

    const fetchAllTermCourses = (req, res, next) => {

        findAll({termCourseRepository}).then(courses => {
            res.json({termCourses: courses})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const addNewTermCourse = (req, res, next) => {

        const idNumber = Date.now()

        const {
            courseId,
            courseDataAndTime,
            examDataAndTime,
            location,
            professorId,
            capacity,
            term,
        } = req.body

        addTermCourse({
                idNumber,
                courseId,
                courseDataAndTime,
                examDataAndTime,
                location,
                professorId,
                capacity,
                term,
                termCourseRepository
            }
        ).then(course => {
            res.json({termCourse: course})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const deleteTermCourse = (req, res, next) => {

        const idNumber = req.params.id

        deleteById({idNumber, termCourseRepository})
            .then(course => {
                res.json({termCourse: course})
            }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }

    const fetchTermCourseById = (req, res, next) => {

        const idNumber = req.params.id

        findById({idNumber, termCourseRepository}).then(course => {
            res.json({termCourse: course})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const updateTermCourse = (req, res, next) => {


        const idNumber = req.params.id

        const {
            courseId,
            courseDataAndTime,
            examDataAndTime,
            location,
            professorId,
            capacity,
            term,
            termCourseRepository
        } = req.body

        update({
                idNumber,
                courseId,
                courseDataAndTime,
                examDataAndTime,
                location,
                professorId,
                capacity,
                term,
                termCourseRepository
            }
        ).then(course => {
            res.json({course: course})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }


    return {
        fetchAllTermCourses,
        addNewTermCourse,
        deleteTermCourse,
        fetchTermCourseById,
        updateTermCourse
    }


}


export default termCourseController;
