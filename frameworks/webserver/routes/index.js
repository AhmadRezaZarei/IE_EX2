import professorRouter from "./professor.js";

const routes =  function routes(app, express) {
    app.use(express.json())
    app.use("/admin", professorRouter(express))

    app.get("/", function (req, res) {
        res.send({a : 2})
    })
}

export default routes;