const mongoose = require("mongoose")

const postSchemea = new mongoose.Schema({
     postImage : String,
     description : String,
     location : String,
     active : Boolean,
})




const Post = mongoose.model("Post", postSchemea)


module.exports = Post