const router = require('express').Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {resgiterValidate, loginValidate} = require("../validate");

router.post('/register', async (req,res) =>{
    
    const { error } = resgiterValidate(req.body)
    if (error) return res.send(error.details[0].message)
    
    if(req.body.password != req.body.repassword) return res.send("Wrong your password")

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : hashPassword,
        status : "normal"
    })

    const emailExist = await User.findOne({email : req.body.email})
    if(emailExist) return res.send("Email already exist")

    try{
        const saveUser = await user.save()
    }catch(err){
        return res.send(err.details[0].message)
    }
    return res.send("Success")
})

router.post("/Admin_register", async (req,res) =>{
    const { error } = resgiterValidate(req.body)
    if (error) return res.send(error.details[0].message)
    
    if(req.body.password != req.body.repassword) return res.send("Wrong your password")

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : hashPassword,
        status : "admin"
    })

    const emailExist = await User.findOne({email : req.body.email})
    if(emailExist) return res.send("Email already exist")

    try{
        const saveUser = await user.save()
    }catch(err){
        return res.send(err.details[0].message)
    }
    return res.send("Success")
})

router.post('/login', async(req, res) =>{
    const { error } = loginValidate(req.body)
    if (error) return res.send(error.details[0].message)

    const user = await User.findOne({ email : req.body.email})
    if(!user) return res.send("Email not found")
    
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.send("Invalid Password")

    const gettoken = jwt.sign({_id : user._id}, process.env.TOKEN_SECRET)
    const token ={
        name : "tokenname",
        value : gettoken,
        users : user
    }
    res.header('auth-token', gettoken).send(token)
})
module.exports = router