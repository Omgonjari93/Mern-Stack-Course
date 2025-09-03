



const mongoose = require("mongoose")

const UserSchemea = new mongoose.Schema({
     userProfile : String,
     fullName : String,
     userName : String,
     email : String,
     mobileNo : Number,
     password : String,
})




const User = mongoose.model("Post", UserSchemea)


module.exports = User