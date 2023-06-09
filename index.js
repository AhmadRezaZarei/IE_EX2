import routes from "./frameworks/webserver/routes/index.js";
import express from "express"
import mongoose from "mongoose";

const app = express()

const port = process.env.PORT || 3000
const connectionString = process.env.connection_string || "mongodb://127.0.0.1:2717/university"

connectionToMongoDB().then(props => {
    console.log("connected to mongodb")
}).catch(err => console.log(err));

async function connectionToMongoDB() {
    await mongoose.connect(connectionString);
}

routes(app, express)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})