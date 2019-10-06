const mongoose = require("../connection")

const Schema = mongoose.Schema
let UserSchema = new Schema({
    first: String,
    last: String,
    email: String

})
let User = mongoose.model("User", UserSchema)
module.exports = User;

