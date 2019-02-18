const Data = require('../models/Data.model');

module.exports.getAllData = async (req, res) => {
  res.status(200).json({
    message: 'Get All data'
  })
}

module.exports.update = async (req, res) => {
  res.status(200).json({
    message: 'Update data'
  })
}

module.exports.create = async (req, res) => {
  res.status(200).json({
    message: 'Create data'
  })
}


