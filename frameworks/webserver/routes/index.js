import professorRouter from "./professor.js";
import studentRouter from "./student.js";
import managerRouter from "./manager.js";
import courseRouter from "./course.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import authRouter from "./auth.js";

const routes = function routes(app, express) {

    app.use(express.json())

    app.use("/admin/", authMiddleware("it_manager"))
    app.use("/admin/", professorRouter(express))
    app.use("/admin/", studentRouter(express))
    app.use("/admin/", managerRouter(express))
    app.use("/admin/", courseRouter(express))
    app.use("/", authRouter(express))
}

export default routes;