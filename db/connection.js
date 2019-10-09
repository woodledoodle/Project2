const mongoose = require("mongoose")
console.log("i didnt fail")

if (process.env.NODE_ENV === "production") 
    {mongoURI = process.env.DB_URL;
    } else {mongoURI = "mongodb://localhost/project2";}

mongoose.connect(mongoURI, {
    useNewUrlParser: true})
    .then(()=>{
        console.log("mongoose connected")
    })
    .catch(err => {
        console.log("error", err)
    })
mongoose.Promise = Promise;
module.exports = mongoose;