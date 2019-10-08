const express = require("express")
const router = express.Router();
const User = require("../db/models/User")

router.post("/", (req,res) => {
    console.log("body",req.body)
    User.create(req.body).then(user =>{
        res.status(200).send({
            success:true,
            user: user
        })
    })
    .catch(err => {
        console.log("err", err)
    })
})

router.get("/:id", (req,res) => {
    User.findOne({
        _id: req.params.id
    }).then(user => {
        res.status(200).send({
            success:true,
            user: user
        })
    })
    .catch(err => {
        console.log("err", err)
    })
})


router.put("/:id", (req,res) => {
    User.findOneAndUpdate({
        _id: req.params.id
    }, req.body).then(user => {
        res.redirect("/")
    }) 
    .catch(err=>{
        console.log("err", err)
    })  
})

router.delete("/:id", (req, res) => {
    User.findOneAndDelete({
        _id: req.params.id
    }).then(() => {
        res.redirect("/");
    })
    .catch(err=>{
        console.log("err", err)
    }) 
})
module.exports = router;