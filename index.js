const express = require("express")
// allows temp storage and tracks instance on port
const session = require("express-session")
const hbs = require("hbs")
const connection = require("./db/connection")
const parser = require("body-parser")
const app = express()
const methodOverride = require("method-override");
const path= require("path")
// require passport
const passport = require("passport");
app.set("view engine", "hbs");
//serve css files
app.use(express.static(path.join(__dirname, "assets")))
const UserController = require("./controllers/UserController")
const LogEntryController = require("./controllers/LogEntryController")
const LoginController = require("./controllers/LoginController")

app.use(parser.json())
app.use(parser.urlencoded({
    extended: true
}))
// save cookies 
app.use(session({ secret: 'passport_key' }));

app.use(passport.initialize());
app.use(passport.session());


app.use(methodOverride("_method"));
//documentation
app.use("/", function(req, res, next) {
    res.locals.user = req.user || null;
    next();
})
app.use("/user", UserController)
app.use("/logentry", LogEntryController)

//login
app.use("/login",LoginController)


app.get("/", (req,res) => {
    if(req.user) {
        res.redirect("/logentry"); 
    } else {
        res.redirect("/login");
    }
    
})


app.listen(3000, () => console.log("running on port 3000"))