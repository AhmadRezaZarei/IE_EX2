import professorController from "../../../adapters/controllers/professorController.js";
import professorDbRepository from "../../../application/repositories/professorRepository.js";
import professorRepositoryMongoDB from "../../database/MongoDB/repositories/professorRepositoryMongoDB.js";

const professorRouter = function(express) {

    const router = express.Router()

    const controller = professorController(professorDbRepository, professorRepositoryMongoDB)

    router.post("/professor", controller.addNewProfessor)

    router.get("/professor/:id", controller.fetchProfessorById)

    return router;

}
export default  professorRouter;