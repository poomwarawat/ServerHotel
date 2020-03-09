const router = require('express').Router();
const Review = require('../model/review');

router.post("/uploadReview", async(req,res) =>{
    const review = new Review({
        email : req.body.email,
        review : req.body.review,
        hotelID : req.body.hotelID,
        hotelName : req.body.hotelName
    })

    try{
        review.save()
    }catch(err){
        res.send(err)
    }
})
router.post("/getReview", async(req, res) =>{
    Review.find({hotelID : req.body.hotelID}, (err, data) =>{
        if(err) return res.send(err)
        else{
            return res.send(data)
        }
    })
})

module.exports = router