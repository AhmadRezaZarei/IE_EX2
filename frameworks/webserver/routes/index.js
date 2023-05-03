import professorRouter from "./professor.js";
import studentRouter from "./student.js";
import managerRouter from "./manager.js";
import courseRouter from "./course.js";

const routes = function routes(app, express) {

    app.use(express.json())

    app.use("/admin/", professorRouter(express))
    app.use("/admin/", studentRouter(express))
    app.use("/admin/", managerRouter(express))
    app.use("/admin/", courseRouter(express))


}

export default routes;