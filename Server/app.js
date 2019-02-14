const express = require('express');
const authRoutes = require('./routes/auth.route');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const app = express();



mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("Atlas was conected"))
  .catch(error => console.log(error));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'working'
  })
});

module.exports = app;