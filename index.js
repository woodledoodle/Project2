const express = require("express")
const hbs = require("hbs")
const connection = require("./db/connection")
const parser = require("body-parser")
const app = express()
const methodOverride = require("method-override");
const path= require("path")
console.log(__dirname)
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "assets")))
const UserController = require("./controllers/UserController")
const LogEntryController = require("./controllers/LogEntryController")
const LoginController = require("./controllers/LoginController")
app.use(parser.json())
app.use(parser.urlencoded({
    extended: true
}))
app.use(methodOverride("_method"));
app.use("/user", UserController)
app.use("/logentry", LogEntryController)

app.use("/login",LoginController)
app.get("/", (req,res) => {
    res.redirect("/logentry/")
    
    
})

app.listen(3000, () => console.log("running on port 3000"))