const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 5000

// Import Routes
const goodsRoute = require('./routes/goods')
const ordersRoute = require('./routes/orders')

// Connect to Mongo DB
const DB_URL = process.env.MONGO_URL

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.info('Connected to DB'))

// Middlewares
app.use(express.json())
app.use(cors())

// Route Middlewares

app.use('/goods', goodsRoute)
app.use('/orders', ordersRoute)

// Starting App
app.listen(port, () => console.log(`Server up and running on port: ${port}`))