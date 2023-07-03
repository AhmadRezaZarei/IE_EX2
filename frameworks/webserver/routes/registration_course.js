import registrationCourseController from "../../../adapters/controllers/registrationCourseController.js";
import registrationCourseDbRepository from "../../../application/repositories/registrationCourseRepository.js";
import registrationCourseMongoDB from "../../database/MongoDB/repositories/registrationCourseRepositoryMongoDB.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const registrationCourseRouter = function (express) {

    const managerMiddleware = authMiddleware(["manager"])

    const router = express.Router()

    const controller = registrationCourseController(registrationCourseDbRepository, registrationCourseMongoDB)


    let md = function (isPreReg) {
        return function (req, res, next) {
            req.query.isPreReg = isPreReg
            next()
        }
    }


    router.post("/term/:id/preregistration", md(true), controller.addRegistrationCourse)

    router.get("/term/:id/preregistration_courses", md(true), controller.fetchRegistrationCourses)

    router.delete("/term/:id/preregistration", md(true), controller.deleteRegistrationCourse)

    router.post("/term/:id/registration", md(false), controller.addRegistrationCourse)

    router.get("/term/:id/registration_courses", md(false), controller.fetchRegistrationCourses)

    router.delete("/term/:id/registration", md(false), controller.deleteRegistrationCourse)


    return router;

}
export default registrationCourseRouter;