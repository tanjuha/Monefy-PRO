const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const userSchema = new Shema({
  name: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('users', userSchema)