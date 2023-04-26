import addProfessor from "../../application/use_cases/professor/add.js";
import professor from "../../entities/professor.js"
import findById from "../../application/use_cases/professor/findById.js";
import findAll from "../../application/use_cases/professor/findAll.js";
import deleteById from "../../application/use_cases/professor/deleteById.js";
import update from "../../application/use_cases/professor/update.js";

const professorController = function (
    professorDbRepository,
    professorDbRepositoryImpl
) {

    const internalServerError = {error: "Unknown error", errorCode: 500}

    const professorRepository = professorDbRepository(professorDbRepositoryImpl())

    const fetchAllProfessors = (req, res, next) => {

        findAll({professorRepository}).then(profs => {
            res.json({professors: profs})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const addNewProfessor = (req, res, next) => {

        const idNumber = Date.now()
        const {firstName, lastName, email, password, rank, phone, faculty, fieldOfStudy} = req.body

        addProfessor(
            {firstName, lastName, idNumber, password, email, phone, faculty, fieldOfStudy, rank, professorRepository}
        ).then(prof => {
            res.json({professor: prof})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const deleteProfessor = (req, res, next) => {

        const idNumber = req.params.id

        deleteById({idNumber, professorRepository})
            .then(prof => {
                res.json({professor: prof})
            }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }

    const fetchProfessorById = (req, res, next) => {

        const idNumber = req.params.id

        findById({idNumber, professorRepository}).then(prof => {
            res.json({professor: prof})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const updateProfessor = (req, res, next) => {


        const idNumber = req.params.id

        const {firstName, lastName, email, password, rank, phone, faculty, fieldOfStudy} = req.body

        update(
            {firstName, lastName, idNumber, password, email, phone, faculty, fieldOfStudy, rank, professorRepository}
        ).then(prof => {
            res.json({professor: prof})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }


    return {
        fetchAllProfessors,
        addNewProfessor,
        deleteProfessor,
        fetchProfessorById,
        updateProfessor
    }


}


export default professorController;
