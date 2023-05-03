import addCourse from "../../application/use_cases/course/add.js";
import course from "../../entities/course.js"
import findById from "../../application/use_cases/course/findById.js";
import findAll from "../../application/use_cases/course/findAll.js";
import deleteById from "../../application/use_cases/course/deleteById.js";
import update from "../../application/use_cases/course/update.js";

const courseController = function (
    courseDbRepository,
    courseDbRepositoryImpl
) {

    const internalServerError = {error: "Unknown error", errorCode: 500}

    const courseRepository = courseDbRepository(courseDbRepositoryImpl())

    const fetchAllCourses = (req, res, next) => {

        findAll({courseRepository}).then(courses => {
            res.json({courses: courses})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const addNewCourse = (req, res, next) => {

        const idNumber = Date.now()

        const {
            name,
            prerequisites,
            corequisites,
            unitCount,
        } = req.body

        addCourse(
            {
                name,
                idNumber,
                prerequisites,
                corequisites,
                unitCount,
                courseRepository
            }
        ).then(course => {
            res.json({course: course})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const deleteCourse = (req, res, next) => {

        const idNumber = req.params.id

        deleteById({idNumber, courseRepository})
            .then(course => {
                res.json({course: course})
            }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }

    const fetchCourseById = (req, res, next) => {

        const idNumber = req.params.id

        findById({idNumber, courseRepository}).then(course => {
            res.json({course: course})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const updateCourse = (req, res, next) => {


        const idNumber = req.params.id


        console.log("ping ping")
        const {
            name,
            prerequisites,
            corequisites,
            unitCount,
        } = req.body

        update(
            {
                name,
                prerequisites,
                corequisites,
                unitCount,
                idNumber,
                courseRepository
            }
        ).then(course => {
            res.json({course: course})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })


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
