const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config({path:'./config.env'})

connectDB()

const app = express()

app.use(express.json())

app.use('/api/cars',require('./routes/api/cars'))

const port = process.env.PORT || 6000

app.listen(port,()=>console.log(`SERVER USPOSTAVLJEN NA ADRESI : http://localhost:${port}`))