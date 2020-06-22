const router = require('express').Router()

router.get('/', async (req, res) => {
  try {
    return res.status(200).send('Hello!')
  } catch (e) {
    // Do something
  }
})

module.exports = router