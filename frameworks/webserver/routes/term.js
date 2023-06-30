import termController from "../../../adapters/controllers/termController.js";
import termDbRepository from "../../../application/repositories/termRepository.js";
import termRepositoryMongoDB from "../../database/MongoDB/repositories/termRepositoryMongoDB.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const termRouter = function (express) {

    const managerMiddleware = authMiddleware(["manager"])

    const router = express.Router()

    const controller = termController(termDbRepository, termRepositoryMongoDB)

    router.post("/term", managerMiddleware, controller.addNewTerm)

    router.get("/term/:id", controller.fetchTermById)

    router.get("/terms", managerMiddleware, controller.fetchAllTerms)

    router.delete("/term/:id", managerMiddleware, controller.deleteTerm)

    router.put("/term/:id", managerMiddleware, controller.updateTerm)

    return router;

}
export default termRouter;