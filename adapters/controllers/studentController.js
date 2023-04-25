import addStudent from "../../application/use_cases/student/add.js";
import findById from "../../application/use_cases/student/findById.js";
import findAll from "../../application/use_cases/student/findAll.js";
import deleteById from "../../application/use_cases/student/deleteById.js";
import update from "../../application/use_cases/student/update.js";

const studentController = function (
    studentDbRepository,
    studentDbRepositoryImpl
) {

    const internalServerError = {error: "Unknown error", errorCode: 500}

    const studentRepository = studentDbRepository(studentDbRepositoryImpl())

    const fetchAllStudents = (req, res, next) => {

        findAll({studentRepository}).then(studs => {
            res.json({students: studs})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const addNewStudent = (req, res, next) => {

        const idNumber = Date.now()
        const {firstName, lastName, email, password, grade, entranceYear, mean, phone, faculty, fieldOfStudy} = req.body

        addStudent({
            firstName,
            lastName,
            idNumber,
            password,
            email,
            phone,
            grade,
            entranceYear,
            mean,
            faculty,
            fieldOfStudy,
            studentRepository
        }).then(stud => {

            res.json({student: stud})

        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const deleteStudent = (req, res, next) => {

        const idNumber = req.params.id

        deleteById({idNumber, studentRepository})
            .then(student => {
                res.json({student: student})
            }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }

    const fetchStudentById = (req, res, next) => {

        const idNumber = req.params.id

        findById({idNumber, studentRepository}).then(stud => {
            res.json({student: stud})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const updateStudent = (req, res, next) => {

        const idNumber = req.params.id

        const {firstName, lastName, email, password, rank, phone, faculty, fieldOfStudy} = req.body

        update(
            {firstName, lastName, idNumber, password, email, phone, faculty, fieldOfStudy, rank, studentRepository}
        ).then(stud => {
            res.json({student: stud})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }


    return {
        fetchAllStudents,
        addNewStudent,
        deleteStudent,
        fetchStudentById,
        updateStudent
    }


}


export default studentController;
