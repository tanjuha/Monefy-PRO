const Data = require('../models/Data.model');

module.exports.getAllData = async (req, res) => {
  res.status(200).json({
    message: 'Get All data'
  })
}

module.exports.getDataForDay= async (req, res) => {
  res.status(200).json({
    message: 'GetDataForDay'
  })
}

module.exports.getDataForWeek = async (req, res) => {
  res.status(200).json({
    message: 'getDataForWeek'
  })
}

module.exports.getDataForMounth = async (req, res) => {
  res.status(200).json({
    message: 'getDataForMounth'
  })
}

module.exports.getDataForYear = async (req, res) => {
  res.status(200).json({
    message: 'getDataForYear'
  })
}

module.exports.create = async (req, res) => {
  res.status(200).json({
    message: 'create data'
  })
}

