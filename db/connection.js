const mongoose = require("mongoose");
require('dotenv').config()
mongoose.connect(process.env.DB)
// mongoose.connect("mongodb://localhost:27017/portfolio",)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;
