import addManager from "../../application/use_cases/manager/add.js";
import findById from "../../application/use_cases/manager/findById.js";
import findAll from "../../application/use_cases/manager/findAll.js";
import deleteById from "../../application/use_cases/manager/deleteById.js";
import update from "../../application/use_cases/manager/update.js";

const professorController = function (
    itManagerDbRepository,
    itManagerDbRepositoryImpl
) {

    const internalServerError = {error: "Unknown error", errorCode: 500}

    const itManagerRepository = itManagerDbRepository(itManagerDbRepositoryImpl())

    const fetchAllItManagers = (req, res, next) => {

        findAll({itManagerRepository}).then(managers => {
            res.json({managers: managers})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const addNewItManager = (req, res, next) => {

        const idNumber = Date.now()
        const {firstName, lastName, email, password, phone} = req.body

        addManager(
            {firstName, lastName, idNumber, password, email, phone, itManagerRepository}
        ).then(manager => {
            res.json({manager: manager})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const deleteItManager = (req, res, next) => {

        const idNumber = req.params.id

        deleteById({idNumber, itManagerRepository})
            .then(manager => {
                res.json({manager: manager})
            }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }

    const fetchItManagerById = (req, res, next) => {

        const idNumber = req.params.id

        findById({idNumber, itManagerRepository}).then(manager => {
            res.json({manager: manager})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const updateItManager = (req, res, next) => {


        const idNumber = req.params.id

        const {firstName, lastName, email, password, rank, phone} = req.body

        update(
            {firstName, lastName, idNumber, password, email, phone, itManagerRepository}
        ).then(manager => {
            res.json({manager: manager})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }


    return {
        fetchAllItManagers,
        addNewItManager,
        deleteItManager,
        fetchItManagerById,
        updateItManager
    }


}


export default professorController;
