const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    Hotel : {
        type : String,
        required : true
    },
    Price : {
        type : String,
        required : true
    },
    Details : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Name : {
        type : String,
        required : true
    },
    StartDate : {
        type : String,
        required : true
    },
    EndDate : {
        type : String,
        required : true
    },
    TotalPrice : {
        type : String,
        required : true
    },
    Date : {
        type : Date,
        default : Date.now
    }
})
module.exports = mongoose.model("Booking", bookingSchema)