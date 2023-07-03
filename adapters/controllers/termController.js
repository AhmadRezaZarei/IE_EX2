import addTerm from "../../application/use_cases/term/add.js";
import findById from "../../application/use_cases/term/findById.js";
import findAll from "../../application/use_cases/term/findAll.js";
import deleteById from "../../application/use_cases/term/deleteById.js";
import update from "../../application/use_cases/term/update.js";

const termController = function (
    termDbRepository,
    termDbRepositoryImpl
) {

    const internalServerError = {error: "Unknown error", errorCode: 500}

    const termRepository = termDbRepository(termDbRepositoryImpl())

    const fetchAllTerms = (req, res, next) => {

        findAll({termRepository}).then(terms => {
            res.json({terms: terms})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const addNewTerm = (req, res, next) => {

        const idNumber = Date.now()

        const {
            name,
            isEnded,
        } = req.body

        addTerm({
                idNumber,
                name,
                isEnded,
                termRepository
            }
        ).then(term => {
            res.json({term: term})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const deleteTerm = (req, res, next) => {

        const idNumber = req.params.id

        deleteById({idNumber, termRepository})
            .then(course => {
                res.json({termCourse: course})
            }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const fetchTermById = (req, res, next) => {

        const idNumber = req.params.id

        findById({idNumber, termRepository}).then(term => {
            res.json({term: term})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const updateTerm = (req, res, next) => {


        const idNumber = req.params.id

        const {
            name,
            isEnded
        } = req.body

        update({
                idNumber,
                name,
                isEnded,
                termRepository
            }
        ).then(course => {
            res.json({term: course})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }


    return {
        fetchAllTerms,
        addNewTerm,
        deleteTerm,
        fetchTermById,
        updateTerm
    }


}


export default termController;
