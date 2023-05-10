import studentController from "../../../adapters/controllers/studentController.js";
import studentDbRepository from "../../../application/repositories/studentRepository.js";
import studentRepositoryMongoDB from "../../database/MongoDB/repositories/studentRepositoryMongoDB.js";

const studentRouter = function (express) {

    const router = express.Router()

    const controller = studentController(studentDbRepository, studentRepositoryMongoDB)

    router.post("/student", controller.addNewStudent)

    router.get("/student/:id", controller.fetchStudentById)

    router.get("/students", controller.fetchAllStudents)

    router.delete("/student/:id", controller.deleteStudent)

    router.put("/student/:id", controller.updateStudent)

    return router;

}
export default studentRouter;