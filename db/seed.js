const user =require("./user.json")

const UserModel=require("./models/User")



  UserModel.deleteMany({})
  .then(() => {
    return UserModel.insertMany(user)
  })
  .then(() => {
    console.log("please work")
    process.exit();  
});

 
