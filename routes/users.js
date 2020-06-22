const router = require('express').Router()

router.get('/:id', async (req, res) => {
  try {
    const userID = req.params.id
    return res.status(200).send(`Hello, ${userID}!`)
  } catch (e) {
    // Do something
  }
})

module.exports = router