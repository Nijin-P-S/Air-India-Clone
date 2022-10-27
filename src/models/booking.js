const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    {
        id : {
            type : Number,
            required : true,
            unique : true
        },
        flight : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : 'Flight'
        },
        user : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : 'User'
        },
        status : {
            type : String,
            required : true,
            default : "In process",
            enum : ["Booked", "Cancelled", "In process"]
        }
    }, {timeStamps : true}
);

const bookingModel = new mongoose.Model("Booking", bookingSchema);

module.exports = bookingModel;