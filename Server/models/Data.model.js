const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const dataShema = new Shema({
  date: {
    type: Date,
    default: Date.now()
  },
  costs: {
    ref: 'costs',
    type: Shema.Types.ObjectId
  },
  user: {
    ref: 'user',
    type: Shema.Types.ObjectId
  }
});

module.exports = mongoose.model('data', dataShema);