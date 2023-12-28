const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  msg: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
