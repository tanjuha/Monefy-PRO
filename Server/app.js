const express = require('express');
const authRoutes = require('./routes/auth.route');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const app = express();
const cost = require('./models/Data.model');

var tanya = new cost({
  costs: '5c65fb877d70e02fb0b4cac1',
  user: '5c65fa0aa84e1a36044c91c2'
});

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("Atlas was conected"))
  .catch(error => console.log(error));
mongoose.set('useCreateIndex', true);
//Use it for fix DeprecationWarning


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