const mongoose = require('mongoose')

const goodsSchema = new mongoose.Schema({
  image: {
    type: Object
  },
  title: {
    type: String,
    required: true,
    max: 255,
    min: 10
  },
  description: {
    type: String,
    required: true,
    max: 255,
    min: 3
  },
  startPrice: {
    type: Number,
  },
})

module.exports = mongoose.model('Goods', goodsSchema)