import professorRouter from "./professor.js";
import studentRouter from "./student.js";
import managerRouter from "./manager.js";
import courseRouter from "./course.js";
import termRouter from "./term.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import authRouter from "./auth.js";
import registrationCourseRouter from "./registration_course.js"
import specificRoleRouter from "./manager_specific.js";
import registerRequestRouter from "./register_request.js";
import authServiceInterface from "../../../application/service/authService.js";
import authServiceImpl from "../../services/authService.js";

const readRoleMiddleWare = function() {

    return function (req, res, next) {

        // Get token from header
        const token = req.header('Authorization');
        const authService = authServiceInterface(authServiceImpl());
        if (!token || token.split(' ')[0] !== 'Bearer') {
            next()
           // res.status(401).json({"error": "Invalid token", errorCode: 401});
            return;
        }
        try {
            const decoded = authService.verify(token.split(' ')[1]);
            req.role = decoded.role;
            req.idNumber = decoded.idNumber

            next();

        } catch (err) {
            next()
            res.status(401).json({"error": "Invalid token", errorCode: 401})
        }
    }
}

const routes = function routes(app, express) {

    app.use(express.json())

    app.use(readRoleMiddleWare())
    app.use("/admin/", authMiddleware(["admin"]))
    app.use("/admin/", professorRouter(express))
    app.use("/admin/", studentRouter(express))
    app.use("/admin/", managerRouter(express))
    app.use("/admin/", courseRouter(express))
    app.use("/", registrationCourseRouter(express))
    app.use("/", registerRequestRouter(express))
    app.use("/", termRouter(express))
    app.use("/", authRouter(express))


    app.use("/", specificRoleRouter(express))

}

export default routes;