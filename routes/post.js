const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title: String,
    description: String,
    image: String,
});

// Add passport-local-mongoose plugin

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;
