const express = require('express');
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./route/auth');
const cors = require('cors');
const Users = require('./model/user');
const management = require('./route/uploadData');


dotenv.config()

mongoose.connect(
    process.env.DB_CONNECT, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Connected") )
    
app.use(express.json())
app.use(cors())
app.use('/user', authRoute )
app.use('/management', management )

app.get('/getData', (req,res) =>{
    Users.find({}, (err, book) =>{
        if(err) return res.send(err)
        else return res.send(book)
    })
})

app.get('/getOnedata', (req,res) =>{
    Users.findOne({email : req.body.email}, (err, data) =>{
        if(err) return res.send(err)
        else{
            console.log(data._id)
            return res.send(data)
        }
    })
})

app.listen(4000, () => console.log("Server is running"))