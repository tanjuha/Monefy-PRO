const data = require('../models/Data.model');

module.exports.overview = async (req, res) => {
  res.status(200).json({
    message: 'Analytics ovreview'
  })
}