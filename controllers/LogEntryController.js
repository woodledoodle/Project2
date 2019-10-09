const express = require("express")
const router = express.Router();
const LogEntry = require("../db/models/LogEntry")
const User = require("../db/models/User");

router.post("/", (req,res) => {
    req.body.date = new Date()
    console.log("re", req.body)

    User.findOne({email: req.body.user}).then(user=>{
        req.body.user = user;
        LogEntry.create(req.body).then(logentry =>{
            res.redirect("/")
        })
        .catch(err => {
            console.log("err", err)
        })
    }) 
})
router.get("/", (req,res) => {
    if(!req.user){
        res.redirect("/login");
    } else {
        LogEntry.find({

        }).populate("user").then(logentries => {
            
            res.render("index", {
                logentries: logentries
            } )
        }).catch(err => {
            console.log("err", err)
        })
    }
})
router.get("/new", (req,res) => {
    res.render("new", {})
})
router.get("/:id", (req,res) => {
    LogEntry.findOne({
        _id: req.params.id
    }).then(logentry => {
        res.status(200).send({
            success:true,
            logentry: logentry
        })
    })
    .catch(err => {
        console.log("err", err)
    })
})
router.put("/:id", (req,res) => {
    LogEntry.findOneAndUpdate({
        _id: req.params.id
    }, req.body).then(logentry => {
        res.redirect("/")
    })
    .catch(err=>{
        console.log("err", err)
    }) 
     
})

router.delete("/:id", (req, res) => {
    console.log("made it in")
    LogEntry.findOneAndDelete({
        _id: req.params.id
    }).then(() => {
        res.redirect("/");
    })
    .catch(err=>{
        console.log("err", err)
    }) 
})
router.get("/edit/:id", (req,res) => {
    LogEntry.findOne({
        _id: req.params.id
    }).then(logentry => {
        res.render("edit", {
            logentry: logentry
        })
    })
})


module.exports = router;