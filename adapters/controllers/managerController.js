import addManager from "../../application/use_cases/manager/add.js";
import findById from "../../application/use_cases/manager/findById.js";
import findAll from "../../application/use_cases/manager/findAll.js";
import deleteById from "../../application/use_cases/manager/deleteById.js";
import update from "../../application/use_cases/manager/update.js";

const managerController = function (
    itManagerDbRepository,
    itManagerDbRepositoryImpl
) {

    const internalServerError = {error: "Unknown error", errorCode: 500}

    const managerRepository = itManagerDbRepository(itManagerDbRepositoryImpl())

    const fetchAllManagers = (req, res, next) => {

        findAll({managerRepository}).then(managers => {
            res.json({managers: managers})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const addNewManager = (req, res, next) => {

        const idNumber = Date.now()
        const {firstName, lastName, email, password, phone, faculty} = req.body

        addManager(
            {firstName, lastName, idNumber, password, email, phone, faculty, managerRepository}
        ).then(manager => {
            res.json({manager: manager})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const deleteManager = (req, res, next) => {

        const idNumber = req.params.id

        deleteById({idNumber, managerRepository})
            .then(manager => {
                res.json({manager: manager})
            }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }

    const fetchManagerById = (req, res, next) => {

        const idNumber = req.params.id

        findById({idNumber, managerRepository}).then(manager => {
            res.json({manager: manager})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })

    }

    const updateManager = (req, res, next) => {


        const idNumber = req.params.id

        const {firstName, lastName, email, password, phone, faculty} = req.body

        update(
            {firstName, lastName, idNumber, password, email, phone, faculty, managerRepository}
        ).then(manager => {
            res.json({manager: manager})
        }).catch(err => {
            res.status(500).json(internalServerError)
        })


    }


    return {
        fetchAllManagers,
        addNewManager,
        deleteManager,
        fetchManagerById,
        updateManager
    }


}


export default managerController;
