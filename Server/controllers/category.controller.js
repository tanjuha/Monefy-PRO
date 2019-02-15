const Category = require('../models/Category.model');

module.exports.getAllCategory = async (req, res) => {
  res.status(200).json({
    message: 'getAllCategory'
  })
}

module.exports.getCategoryById = async (req, res) => {
  res.status(200).json({
    message: 'getCategory'
  })
}

module.exports.create = async (req, res) => {
  res.status(200).json({
    message: 'CreateCategory'
  })
}

module.exports.update = async (req, res) => {
  res.status(200).json({
    message: 'UpdateCategory'
  })
}

module.exports.remove = async (req, res) => {
  res.status(200).json({
    message: 'RemoveCategory'
  })
}