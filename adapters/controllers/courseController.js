import addCourse from "../../application/use_cases/course/add.js";
import findById from "../../application/use_cases/course/findById.js";
import findAll from "../../application/use_cases/course/findAll.js";
import deleteById from "../../application/use_cases/course/deleteById.js";
import update from "../../application/use_cases/course/update.js";

import addTermCourse from "../../application/use_cases/term_course/add.js";
import findTermCourseById from "../../application/use_cases/term_course/findById.js";
import findAllTermCourses from "../../application/use_cases/term_course/findAll.js";
import deleteTermCourseById from "../../application/use_cases/term_course/deleteById.js";
import updateTermCourse from "../../application/use_cases/term_course/update.js";


const courseController = function (
    courseDbRepository,
    courseDbRepositoryImpl,
    termCourseDbRepository,
    termCourseDbRepositoryImpl
) {

    const internalServerError = {error: "Unknown error", errorCode: 500}

    const courseRepository = courseDbRepository(courseDbRepositoryImpl())
    const termCourseRepository = termCourseDbRepository(termCourseDbRepositoryImpl())

    const fetchAllCourses = (req, res, next) => {


        const fieldOfStudy = req.query.fieldOfStudy === "" ? null : req.query.fieldOfStudy;
        const isTermCourse = req.query.termCourse === "true"


        if (isTermCourse) {

            findAllTermCourses({termCourseRepository}).then(courses => {
                res.json({termCourses: courses})
            }).catch(err => {
                res.status(500).json(internalServerError)
            })


        } else {

            findAll({fieldOfStudy, courseRepository}).then(courses => {
                res.json({courses: courses})
            }).catch(err => {
                res.status(500).json(internalServerError)
            })


        }


    }

    const addNewCourse = (req, res, next) => {

        const idNumber = Date.now()

        const isTermCourse = req.query.termCourse === "true"

        if (isTermCourse) {

            const {
                courseId,
                courseDataAndTime,
                examDataAndTime,
                location,
                professorId,
                capacity,
                termId
            } = req.body

            addTermCourse({
                idNumber,
                courseId,
                courseDataAndTime,
                examDataAndTime,
                location,
                professorId,
                capacity,
                termId,
                termCourseRepository
            }).then(course => {
                res.json({termCourse: course})
            }).catch(err => {
                res.status(500).json(internalServerError)
            })

        } else {


            const {
                name,
                prerequisites,
                corequisites,
                unitCount,
                fieldOfStudy
            } = req.body

            addCourse(
                {
                    name,
                    idNumber,
                    prerequisites,
                    corequisites,
                    unitCount,
                    fieldOfStudy,
                    courseRepository
                }
            ).then(course => {
                res.json({course: course})
            }).catch(err => {
                res.status(500).json(internalServerError)
            })
        }
    }

    const deleteCourse = (req, res, next) => {


        const isTermCourse = req.query.termCourse === "true"
        const idNumber = req.params.id

        if (isTermCourse) {
            deleteTermCourseById({idNumber, termCourseRepository})
                .then(course => {
                    res.json({termCourse: course})
                }).catch(err => {
                res.status(500).json(internalServerError)
            })
        } else {
            deleteById({idNumber, courseRepository})
                .then(course => {
                    res.json({course: course})
                }).catch(err => {
                res.status(500).json(internalServerError)
            })
        }
    }

    const fetchCourseById = (req, res, next) => {

        const idNumber = req.params.id
        const isTermCourse = req.query.termCourse === "true"

        if (isTermCourse) {

            findTermCourseById({idNumber, termCourseRepository}).then(course => {
                res.json({termCourse: course})
            }).catch(err => {
                res.status(500).json(internalServerError)
            })

        } else {


            findById({idNumber, courseRepository}).then(course => {
                res.json({course: course})
            }).catch(err => {
                res.status(500).json(internalServerError)
            })

        }

    }

    const updateCourse = (req, res, next) => {

        const idNumber = req.params.id


        const isTermCourse = req.query.termCourse === "true"

        if (isTermCourse) {

            const {
                courseId,
                courseDataAndTime,
                examDataAndTime,
                location,
                professorId,
                capacity,
                termId
            } = req.body

            updateTermCourse({
                idNumber,
                courseId,
                courseDataAndTime,
                examDataAndTime,
                location,
                professorId,
                capacity,
                termId,
                termCourseRepository
            }).then(termCourse => {

                res.json({
                    termCourse:
                    termCourse
                })

            }).catch(err => {

                res.status(500).json(internalServerError)

            })

        } else {


            const {
                name,
                prerequisites,
                corequisites,
                unitCount,
                fieldOfStudy
            } = req.body

            update(
                {
                    name,
                    prerequisites,
                    corequisites,
                    unitCount,
                    idNumber,
                    fieldOfStudy,
                    courseRepository
                }
            ).then(course => {
                res.json({course: course})
            }).catch(err => {
                res.status(500).json(internalServerError)
            })


        }

    }


    return {
        fetchAllCourses,
        addNewCourse,
        deleteCourse,
        fetchCourseById,
        updateCourse
    }


}


export default courseController;
