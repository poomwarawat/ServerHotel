const router = require('express').Router();
const Hotel = require('../model/hotel');

router.post("/uploadHotelData", async (req,res) =>{
    const hotel = new Hotel({
        name : req.body.name,
        details : req.body.details,
        smallPic : req.body.smallPic,
        smallPrice : req.body.smallPrice,
        smallData : req.body.smallData,
        middlePic : req.body.middlePic,
        middlePrice : req.body.middlePrice,
        middleData : req.body.middleData,
        largePic : req.body.largePic,
        largePrice : req.body.largePrice,
        largeData : req.body.largeData,
        contact : req.body.contact,
        location : req.body.location,
        picHead : req.body.file,
        email : req.body.userEmail
    })
    try{
        hotel.save()
    }catch{
        res.send("Error")
    }
})

module.exports = router