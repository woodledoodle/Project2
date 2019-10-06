const mongoose = require("mongoose")
console.log("i didnt fail")

mongoose.connect("mongodb://localhost/project2", {
    useNewUrlParser: true})
    .then(()=>{
        console.log("mongoose connected")
    })
    .catch(err => {
        console.log("error", err)
    })
mongoose.Promise = Promise;
module.exports = mongoose;