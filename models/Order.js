const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  phone: String,
  name: String,
  createAt: Date,
  goods: Array,
  address: String,
  totalAmount: Number
})

module.exports = mongoose.model('Order', orderSchema)