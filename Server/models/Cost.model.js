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
  category: {
    name: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      default: ''
    }
  }
})

module.exports = mongoose.model('costs', costShema);