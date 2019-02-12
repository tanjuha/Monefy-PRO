const express = require('express');
const authRoutes = require('./routes/auth.route');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();


mongoose.connect(keys.mongoURI)
  .then(() => console.log("Atlas was conected"))
  .catch((error) => console.log(error))

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'working'
  })
});

module.exports = app;