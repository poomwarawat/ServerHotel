const router = require('express').Router();
const Booking = require('../model/booking');

router.post("/addBooking", async (req, res) =>{
    console.log(req.body)
    const booking = new Booking({
        Hotel : req.body.Hotel,
        Price : req.body.Price,
        Details : req.body.Detail,
        Email : req.body.email,
        Name : req.body.name
    })
    try{
        const book =  booking.save()
        return res.send(book)
    }catch(err){
        return res.send(err)
    }
})
router.post("/search", (req,res) =>{
    console.log(req.body.email)
    Booking.find({Email : req.body.email}, (err, data ) =>{
        if(err) return res.send(err)
        else{
            console.log(data)
            return res.send(data)
        }
    })
})

module.exports = router