const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
const authRoutes = require('./routes/auth')
const admin_route = require('./routes/admin_route')
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/admin', admin_route);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
