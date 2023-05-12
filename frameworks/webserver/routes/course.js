import courseController from "../../../adapters/controllers/courseController.js";
import courseDbRepository from "../../../application/repositories/CourseRepository.js";
import courseRepositoryMongoDB from "../../database/MongoDB/repositories/courseRepositoryMongoDB.js";
import termCourseDbRepository from "../../../application/repositories/TermCourseRepository.js";
import termCourseRepositoryMongoDB from "../../database/MongoDB/repositories/termCourseRepositoryMongoDB.js";

const courseRouter = function (express) {

    const router = express.Router()

    const controller = courseController(courseDbRepository, courseRepositoryMongoDB, termCourseDbRepository, termCourseRepositoryMongoDB)

    router.post("/course/", controller.addNewCourse)

    router.get("/course/:id", controller.fetchCourseById)

    router.get("/courses", controller.fetchAllCourses)

    router.delete("/course/:id", controller.deleteCourse)

    router.put("/course/:id", controller.updateCourse)

    return router;

}
export default courseRouter;