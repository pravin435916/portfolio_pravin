const express = require('express');
const router = express.Router();
const User = require('../models/user')
const validator = require('validator');
router.post("/send", async (req, res) => {
    try {
      const { name, email, msg } = req.body;
      if (!name || !email || !msg) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields: name, email, msg",
        });
      }
      if (!validator.isEmail(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with that email already exists.",
      });
    }
      const newUser = new User({ name, email, msg });
      await newUser.save(); 
      console.log("User Created :",newUser);
      res.status(200).json({ success: true, message: "Message send successfully." });
    } catch (error) {
      console.error("Error in message: ", error);
      res.status(500).json({ success: false, message: "msg failed." });
    }
  });
  
  module.exports = router;