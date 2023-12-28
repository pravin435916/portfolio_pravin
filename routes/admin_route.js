const express = require('express');
const router = express.Router();
const User = require('../models/user')
router.get('/msg', async (req, res) => {
    try {
      const users = await User.find({});
      if (!users) {
        return res.status(404).json({ success: false, message: 'Users not found' });
      }
      res.status(200).json({users});
    } catch (error) {
      console.error('Error in fetching : ', error);
      res.status(500).json({ success: false, message: 'Internal server error fetching .' });
    }
  });
  module.exports = router;