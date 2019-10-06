const mongoose = require("../connection")
const Schema = mongoose.Schema
let LogEntrySchema = new Schema({
    date: Date,
    subject: String,
    description: String,
    resolution: String,
    user: {type:Schema.Types.ObjectId, ref: "User"}
})

let LogEntry = mongoose.model("LogEntry", LogEntrySchema)
module.exports = LogEntry;