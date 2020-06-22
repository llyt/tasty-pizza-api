const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  phone: String,
  name: String,
  createAt: String,
  goods: Array,
  address: String,
  totalAmount: Number
})

module.exports = mongoose.model('Order', orderSchema)