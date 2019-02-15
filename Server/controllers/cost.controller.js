const Cost = require('../models');

module.exports.getAllCost = async (req, res) => {
  res.status(200).json({
  message: 'getAllCost'
})
}

module.exports.getCostById = async (req, res) => {
 res.status(200).json({
   message: 'getCostById'
 })
}

module.exports.create = async (req, res) => {
 res.status(200).json({
   message: 'Create new cost'
 })
}

module.exports.update = async (req, res) => {
  res.status(200).json({
    message: 'Update cost'
  })
}

module.exports.remove = async (req, res) => {
  res.status(200).json({
    message: 'Remove cost'
  })
}