import * as https from "https";
import addProfessor from "../../application/use_cases/professor/add";


export function professorController(
    professorDbRepository,
    professorDbRepositoryImpl
) {

    const internalServerError = {error: "Unknown error", errorCode: 500}

    const dbRepository = professorDbRepository(professorDbRepositoryImpl())


    const fetchAllProfessors = (req, res, next) => {

    }

    const addNewProfessor = (req, res, next) => {

        const idNumber = Date.now()
        const {firstName, lastName, email, password, rank, phone, faculty, fieldOfStudy} = req.body

        addProfessor(
            {firstName, lastName, idNumber, password, email, phone, faculty, fieldOfStudy, rank, dbRepository}
        ).then(prof => {
            res.json({professor: prof})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const deleteProfessor = (req, res, next) => {

    }

    const fetchProfessorById = (req, res, next) => {

    }

    const updateProfessor = (req, res, next) => {

    }


    return {
        fetchAllProfessors,
        addNewProfessor,
        deleteProfessor,
        fetchProfessorById,
        updateProfessor
    }


}