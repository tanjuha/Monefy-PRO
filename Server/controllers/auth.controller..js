const User = require('../models/User.model');

module.exports.login = (req, res) => {
  res.status(200).json({
    message: "Login"
  });
}

module.exports.register = (req, res) => {
  res.status(200).json({
    message: "Register"
  })
}