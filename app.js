const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const port = 5000

// Import Routes
const goodsRoute = require('./routes/goods')
const usersRoute = require('./routes/users')

// Connect to Mongo DB
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.info('Connected to DB'))

// Middlewares
app.use(express.json())
app.use(cors())

// Route Middlewares

app.use('/goods', goodsRoute)
app.use('/users', usersRoute)

// Starting App
app.listen(port, () => console.log(`Server up and running on port: ${port}`))