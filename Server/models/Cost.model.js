const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const costShema = new Shema({
  description: {
    type: String,
    default: ''
  },
  costVal: {
    type: Number,
    required: true
  },
  // category: {
  //   type: 
  // }
})

module.exports = mongoose.model('costs', costShema);