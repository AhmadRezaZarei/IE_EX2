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

    const managerMiddleware = authMiddleware(["manager"])
    const managerAndStudentAndProfessorMiddleware = authMiddleware(["student", "manager", "professor"])
    const studentMiddleware = authMiddleware(["student"])
    const professorMiddleware = authMiddleware(["professor"])

    router.post("/course", managerMiddleware, courseController.addNewCourse)


    router.get("/course/:id", managerAndStudentAndProfessorMiddleware, courseController.fetchCourseById)
    router.get("/courses", managerAndStudentAndProfessorMiddleware, courseController.fetchAllCourses)

    router.delete("/course/:id", managerMiddleware, courseController.deleteCourse)
    router.put("/course/:id", managerMiddleware, courseController.updateCourse)
    router.get("/students", managerMiddleware, studentController.fetchAllStudents)
    router.get("/student/:id", managerMiddleware, studentController.fetchStudentById)
    router.get("/professors", managerMiddleware, professorController.fetchAllProfessors)
    router.get("/professors/:id", managerMiddleware, professorController.fetchProfessorById)

    router.put("/student/:id", studentMiddleware, studentController.updateStudent)
    router.put("/professor/:id", professorMiddleware, professorController.updateProfessor)

    return router;

}
export default managerSpecificRouter;