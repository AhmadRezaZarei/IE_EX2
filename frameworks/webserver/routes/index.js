import professorRouter from "./professor.js";
import studentRouter from "./student";

const routes = function routes(app, express) {
    app.use(express.json())
    app.use("/admin/", professorRouter(express))
    app.use("/admin/", studentRouter(express))
    app.get("/", function (req, res) {
        res.send({a: 2})
    })
}

export default routes;