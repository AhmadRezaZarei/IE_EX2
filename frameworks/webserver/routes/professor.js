import professorController from "../../../adapters/controllers/professorController.js";
import professorDbRepository from "../../../application/repositories/professorRepository.js";
import professorRepositoryMongoDB from "../../database/MongoDB/repositories/professorRepositoryMongoDB.js";

const professorRouter = function(express) {

    const router = express.Router()

    const controller = professorController(professorDbRepository, professorRepositoryMongoDB)

    router.post("student/", controller.addNewProfessor)

    router.get("student/:id", controller.fetchProfessorById)

    router.get("students/", controller.fetchAllProfessors)

    router.delete("student/:id", controller.deleteProfessor)

    router.put("student/", controller.updateProfessor)

    return router;

}
export default  professorRouter;