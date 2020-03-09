const express = require('express');
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./route/auth');
const cors = require('cors');
const Booking = require('./route/booking');
const management = require('./route/uploadData');
const Review = require('./route/review');

dotenv.config()

mongoose.connect(
    process.env.DB_CONNECT, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected") )
    
app.use(express.json())
app.use(cors())
app.use('/user', authRoute )
app.use('/management', management )
app.use('/booking', Booking)
app.use('/review', Review)

app.listen(process.env.PORT, () => console.log("Server is running"))