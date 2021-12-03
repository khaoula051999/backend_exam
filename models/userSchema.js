const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
})

module.exports = mongoose.model("User", UserSchema);