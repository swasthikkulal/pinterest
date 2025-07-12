const { name } = require("ejs");
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pin")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  name: String,
  email: String,
  contact: Number,
  profileImage: String,
  boards: { type: Array, default: [] },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

// Add passport-local-mongoose plugin
userSchema.plugin(passportLocalMongoose);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
