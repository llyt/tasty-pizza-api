const router = require('express').Router()
const Order = require('../models/Order')

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
    return res.status(200).send(orders)
  } catch (e) {
    // Do something
  }
})

module.exports = router