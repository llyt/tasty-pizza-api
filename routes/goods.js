const router = require('express').Router()
const Goods = require('../models/Goods')

router.get('/', async (req, res) => {
  try {
    const allGoods = await Goods.find()
    return res.status(200).send(allGoods)
  } catch (e) {
    console.error(e.message)
  }
})

module.exports = router