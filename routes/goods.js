const router = require('express').Router()
const Goods = require('../models/Goods')

router.get('/', async (req, res) => {
  try {
    const allGoods = await Goods.find()
    return res.status(200).send(allGoods)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

module.exports = router