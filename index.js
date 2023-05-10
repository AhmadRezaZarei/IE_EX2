import routes from "./frameworks/webserver/routes/index.js";
import express from "express"
import mongoose from "mongoose";

const app = express()

const port = 3000


connectionToMongoDB().then(props => {
    console.log("connected to mongodb")
}).catch(err => console.log(err));

async function connectionToMongoDB() {
    await mongoose.connect('mongodb://127.0.0.1:2717/university');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

routes(app, express)

app.listen(port, () => {
    console.log("listening")
})