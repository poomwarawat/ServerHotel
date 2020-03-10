const router = require('express').Router();
const Booking = require('../model/booking');

router.post("/addBooking", async (req, res) =>{
    console.log(req.body)
    const booking = new Booking({
        Hotel : req.body.Hotel,
        Price : req.body.Price,
        Details : req.body.Detail,
        Email : req.body.email,
        Name : req.body.name,
        StartDate : req.body.startDate,
        EndDate : req.body.endDate,
        TotalPrice : req.body.totalPrice
    })
    try{
        const book =  booking.save()
        return res.send(book)
    }catch(err){
        return res.send(err)
    }
})
router.post("/search", (req,res) =>{
    Booking.find({Email : req.body.email}, (err, data ) =>{
        if(err) return res.send(err)
        else{
            return res.send(data)
        }
    })
})

router.post("/searchHotel", (req,res) =>{
    Booking.find({Hotel : req.body.Hotel}, (err, data ) =>{
        if(err) return res.send(err)
        else{
            return res.send(data)
        }
    })
})

module.exports = router