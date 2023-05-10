import managerController from "../../../adapters/controllers/managerController.js";
import managerDbRepository from "../../../application/repositories/ManagerRepository.js";
import managerRepositoryMongoDB from "../../database/MongoDB/repositories/itManagerRepositoryMongoDB.js";

const managerRouter = function (express) {

    const router = express.Router()

    const controller = managerController(managerDbRepository, managerRepositoryMongoDB)

    router.post("/manager/", controller.addNewManager)

    router.get("/manager/:id", controller.fetchManagerById)

    router.get("/managers", controller.fetchAllManagers)

    router.delete("/manager/:id", controller.deleteManager)

    router.put("/manager/:id", controller.updateManager)

    return router;

}
export default managerRouter;