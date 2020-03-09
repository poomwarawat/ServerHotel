const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    review : {
        type : String,
        required : true
    },
    hotelID : {
        type : String,
        required : true
    },
    hotelName : {
        type : String,
        required : true
    }
})
module.exports = mongoose.model("review", reviewSchema)