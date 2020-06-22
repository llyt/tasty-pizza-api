const router = require('express').Router()
const Order = require('../models/Order')

// Get all orders
router.get('/', async (req, res) => {
  if (req.query.phone) {
    try {
      const orders = await Order.find()
      const result = orders.filter(({ phone }) => phone === req.query.phone)
      return res.status(200).send(result)
    } catch (e) {
      res.status(400).send(e.message)
    }
  }
  try {
    const orders = await Order.find()
    return res.status(200).send(orders)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

// Create new order
router.post('/', async (req, res) => {
  if (!validation(['phone', 'name', 'date', 'goods', 'address'], req)) {
    return res.status(400).send('Request data is not valid!')
  }

  const { phone, name, date, goods, address } = req.body

  const order = new Order({
    phone,
    name,
    createAt: date,
    goods,
    address,
  })

  try {
    await order.save()
    res.status(201).send(order._id)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

module.exports = router

function validation(fields, req) {
  const params = req.body
  return fields.every((field) => params[field])
}