const express = require("express")
const mongoose = require("mongoose")
const app = express()

const port = 3000


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:2717/university');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log("listening")
})