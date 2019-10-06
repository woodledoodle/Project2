const express = require("express")
const hbs = require("hbs")
const connection = require("./db/connection")
const parser = require("body-parser")
const app = express()
const UserController = require("./controllers/UserController")
const LogEntryController = require("./controllers/LogEntryController")
app.use(parser.json())
app.use(parser.urlencoded({
    extended: true
}))
app.use("/user", UserController)
app.use("/logentry", LogEntryController)

app.get("/", (req,res) => {
    res.send("hello")
    console.log(req)
    
})

app.listen(3000, () => console.log("running on port 3000"))