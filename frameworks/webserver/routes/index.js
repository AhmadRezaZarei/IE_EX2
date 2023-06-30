import professorRouter from "./professor.js";
import studentRouter from "./student.js";
import managerRouter from "./manager.js";
import courseRouter from "./course.js";
import termRouter from "./term.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import authRouter from "./auth.js";
import specificRoleRouter from "./manager_specific.js";

const routes = function routes(app, express) {

    app.use(express.json())

    app.use("/admin/", authMiddleware(["admin"]))
    app.use("/admin/", professorRouter(express))
    app.use("/admin/", studentRouter(express))
    app.use("/admin/", managerRouter(express))
    app.use("/admin/", courseRouter(express))

    app.use("/", termRouter(express))
    app.use("/", authRouter(express))


    app.use("/", specificRoleRouter(express))

}

export default routes;