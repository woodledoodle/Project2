const express = require("express")
const router = express.Router();
const LogEntry = require("../db/models/LogEntry")

router.post("/", (req,res) => {
    LogEntry.create(req.body).then(logentry =>{
        res.status(200).send({
            success:true,
            logentry: logentry
        })
    })
    .catch(err => {
        console.log("err", err)
    })
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
    LogEntry.findOneAndDelete({
        _id: req.params.id
    }).then(() => {
        res.redirect("/");
    })
    .catch(err=>{
        console.log("err", err)
    }) 
})
module.exports = router;