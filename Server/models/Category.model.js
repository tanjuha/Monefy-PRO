const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const categoryShema = new Shema({
  name: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('category', categoryShema);