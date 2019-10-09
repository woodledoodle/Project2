const mongoose = require("../connection")

const Schema = mongoose.Schema
let UserSchema = new Schema({
    first: String,
    last: String,
    username: String,
    email: String,
    password: String

})

UserSchema.statics.findByCredentials = function(email, password, callback){
    let User = this; 
    User.findOne({email: email, password:password}, callback);
        
}
let User = mongoose.model("User", UserSchema)
module.exports = User;

