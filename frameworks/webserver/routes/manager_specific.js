import courseController from "../../../adapters/controllers/courseController.js";
import courseDbRepository from "../../../application/repositories/CourseRepository.js";
import courseRepositoryMongoDB from "../../database/MongoDB/repositories/courseRepositoryMongoDB.js";
import studentController from "../../../adapters/controllers/studentController.js";
import studentDbRepository from "../../../application/repositories/studentRepository.js";
import studentRepositoryMongoDB from "../../database/MongoDB/repositories/studentRepositoryMongoDB.js";
import professorController from "../../../adapters/controllers/professorController.js";
import professorDbRepository from "../../../application/repositories/professorRepository.js";
import professorRepositoryMongoDB from "../../database/MongoDB/repositories/professorRepositoryMongoDB.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import termCourseDbRepository from "../../../application/repositories/TermCourseRepository.js";
import termCourseRepositoryMongoDB from "../../database/MongoDB/repositories/termCourseRepositoryMongoDB.js";

const specificRoleRouter = function (express) {

    const router = express.Router()

    const mCourseController = courseController(courseDbRepository, courseRepositoryMongoDB, termCourseDbRepository, termCourseRepositoryMongoDB)
    const mStudentController = studentController(studentDbRepository, studentRepositoryMongoDB)
    const mProfessorController = professorController(professorDbRepository, professorRepositoryMongoDB)

    const managerMiddleware = authMiddleware(["manager"])
    const managerAndStudentAndProfessorMiddleware = authMiddleware(["student", "manager", "professor"])
    const studentMiddleware = authMiddleware(["student"])
    const professorMiddleware = authMiddleware(["professor"])

    router.post("/course", managerMiddleware, mCourseController.addNewCourse)


    router.get("/course/:id", managerAndStudentAndProfessorMiddleware, mCourseController.fetchCourseById)
    router.get("/courses", managerAndStudentAndProfessorMiddleware, mCourseController.fetchAllCourses)

    router.delete("/course/:id", managerMiddleware, mCourseController.deleteCourse)
    router.put("/course/:id", managerMiddleware, mCourseController.updateCourse)
    router.get("/students", managerMiddleware, mStudentController.fetchAllStudents)
    router.get("/student/:id", managerMiddleware, mStudentController.fetchStudentById)
    router.get("/professors", managerMiddleware, mProfessorController.fetchAllProfessors)
    router.get("/professors/:id", managerMiddleware, mProfessorController.fetchProfessorById)

    router.put("/student/:id", studentMiddleware, mStudentController.updateStudent)
    router.put("/professor/:id", professorMiddleware, mProfessorController.updateProfessor)





    return router;

}
export default specificRoleRouter;