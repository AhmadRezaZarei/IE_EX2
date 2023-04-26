import itManagerController from "../../../adapters/controllers/itManagerController.js";
import itManagerRepository from "../../../application/repositories/itManagerRepository.js";
import itManagerRepositoryMongoDB from "../../database/MongoDB/repositories/itManagerRepositoryMongoDB.js";

const managerRouter = function (express) {

    const router = express.Router()

    const controller = itManagerController(itManagerRepository, itManagerRepositoryMongoDB)

    router.post("manager/", controller.addNewProfessor)

    router.get("manager/:id", controller.fetchProfessorById)

    router.get("managers/", controller.fetchAllProfessors)

    router.delete("manager/:id", controller.deleteProfessor)

    router.put("manger/:id", controller.updateProfessor)

    return router;

}
export default managerRouter;