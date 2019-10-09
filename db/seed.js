const logentry = require("./logentry.json")
const user =require("./user.json")

const LogEntryModel = require("./models/LogEntry")
const UserModel=require("./modelsUser")

LogEntryModel.deleteMany({})
  .then(() => {
    return LogEntryModel.insertMany(logentry)
  })
  .then(() => {
    console.log("please work")
  }).catch(err => console.log(err, 'you failed your seeds'));

  UserModel.deleteMany({})
  .then(() => {
    return UserModel.insertMany(user)
  })
  .then(() => {
    console.log("please work")
  }).catch(err => console.log(err, 'failed your seed'));