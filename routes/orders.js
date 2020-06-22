const router = require('express').Router()

router.get('/', async (req, res) => {
  try {
    return res.status(200).send('That are your orders, sir!')
  } catch (e) {
    // Do something
  }
})

module.exports = router