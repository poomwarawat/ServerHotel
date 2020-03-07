const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    details : {
        type : String,
        required : true
    },
    smallPic : {
        type : String,
        required : true
    },
    smallPrice : {
        type : String,
        required : true
    },
    smallData : {
        type : String,
        required : true
    },
    middlePic : {
        type : String,
        required : true
    },
    middlePrice : {
        type : String,
        required : true
    },
    middleData : {
        type : String,
        required : true
    },
    largePic : {
        type : String,
        required : true
    },
    largePrice : {
        type : String,
        required : true
    },
    largeData : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    picHead : {
        type : String,
        required : true
    },
    Create : {
        type : Date,
        default : Date.now
    },
    email : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("HotelData", hotelSchema)