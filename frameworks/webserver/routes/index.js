import professorRouter from "./professor";

export default function routes(app ,express) {

    app.use("/admin", professorRouter(express))

}