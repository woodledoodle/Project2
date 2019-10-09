const express = require("express")
const router = express.Router() 
const User = require("../db/models/User") 

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


router.get("/", (req,res) =>{
    res.render("login")
})
//middleware
passport.serializeUser(function(user, done) {
    console.log("how about here")
    done(null, user.id);
  });
   //middleware
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
// defines how we authenticate
passport.use(new LocalStrategy({
    //change the deault
    usernameField: 'email',
    passwordField: 'password'
    },
    //determines if input was correct
    function(email, password, done) {
      User.findByCredentials(email, password, function (err, user) {
          console.log("in here")  
        if (err) { console.log("there was an err", err); return done(err); }
        if (!user) { return done(null, false, {message: "user credentials don't match"}); } else {console.log("the user: ", user)}

        return done(null, user);
      });
    }
  ));
  //strategy after you login verifies through middleware which is passport.authenticate
router.post("/", passport.authenticate('local', {failureRedirect: '/login', failureFlash: false}), (req,res)  =>{
    console.log("user", req.user)
    if(req.user){
      console.log("login successful");
      //next();
      res.redirect("/")
    }
    // User.findOne({
    //     email: req.body.email
    // }).then(user => {
    //     if (!user){
    //         console.log("user does not exist")
    //         res.redirect("/login")
    //     }else {
    //         console.log("user", user)
    //         res.redirect("/");
    //     }
        
    // })
})
module.exports = router;