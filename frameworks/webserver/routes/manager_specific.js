import courseController from "../../../adapters/controllers/courseController.js";
import courseDbRepository from "../../../application/repositories/CourseRepository.js";
import courseRepositoryMongoDB from "../../database/MongoDB/repositories/courseRepositoryMongoDB.js";
import studentController from "../../../adapters/controllers/studentController.js";
import studentDbRepository from "../../../application/repositories/studentRepository.js";
import studentRepositoryMongoDB from "../../database/MongoDB/repositories/studentRepositoryMongoDB.js";
import professorController from "../../../adapters/controllers/professorController.js";
import professorDbRepository from "../../../application/repositories/professorRepository.js";
import professorRepositoryMongoDB from "../../database/MongoDB/repositories/professorRepositoryMongoDB.js";
import authMiddleware from "../middlewares/authMiddleware";

const managerSpecificRouter = function (express) {

    const router = express.Router()

    const courseController = courseController(courseDbRepository, courseRepositoryMongoDB)
    const studentController = studentController(studentDbRepository, studentRepositoryMongoDB)
    const professorController = professorController(professorDbRepository, professorRepositoryMongoDB)

    router.post("/course/", authMiddleware("manager"), courseController.addNewCourse)
    router.get("/course/:id", authMiddleware("manager"), courseController.fetchCourseById)
    router.get("/courses", authMiddleware("manager"), courseController.fetchAllCourses)
    router.delete("/course/:id", authMiddleware("manager"), courseController.deleteCourse)
    router.put("/course/:id", authMiddleware("manager"), courseController.updateCourse)
    router.get("/students", authMiddleware("manager"), studentController.fetchAllStudents)
    router.get("/student/:id", authMiddleware("manager"), studentController.fetchStudentById)
    router.get("/professors", authMiddleware("manager"), professorController.fetchAllProfessors)
    router.get("/professors/:id", authMiddleware("manager"), professorController.fetchProfessorById)
        ``
    return router;

}
export default managerSpecificRouter;