import itManagerController from "../../../adapters/controllers/itManagerController.js";
import itManagerRepository from "../../../application/repositories/itManagerRepository.js";
import itManagerRepositoryMongoDB from "../../database/MongoDB/repositories/itManagerRepositoryMongoDB.js";

const managerRouter = function (express) {

    const router = express.Router()

    const controller = itManagerController(itManagerRepository, itManagerRepositoryMongoDB)

    router.post("/manager/", controller.addNewItManager)

    router.get("/manager/:id", controller.fetchItManagerById)

    router.get("/managers", controller.fetchAllItManagers)

    router.delete("/manager/:id", controller.deleteItManager)

    router.put("/manager/:id", controller.updateItManager)

    return router;

}
export default managerRouter;