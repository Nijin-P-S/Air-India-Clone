const BookingService = require('../service/bookingService');

const createBooking = async (req, res) => {
    try{
       const booking = await BookingService.createBooking(req.body);
       res.status(200).json({
            success : true,
            message : "Successfully created booking",
            data : booking
       })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : "Something went wrong",
        })
    } 
} 


const boardingPass = async (req, res)=>{
    try{
        const booking = await BookingService.boardingPass(req.params.id);
        res.status(200).json({
             success : true,
             message : "Successfully fetched boarding pass",
             data : booking
        })
     }
     catch(err){
         console.log(err);
         res.status(500).json({
             success : false,
             message : "Something went wrong",
         })
     } 
}


const cancelBooking = async (req, res)=>{
    try{
        const booking = await BookingService.cancelBooking(req.params.id);
        res.status(200).json({
             success : true,
             message : "Successfully cancelled booking",
             data : booking
        })
     }
     catch(err){
         console.log(err);
         res.status(500).json({
             success : false,
             message : "Something went wrong",
         })
     } 
}


module.exports = {
    createBooking,
    boardingPass,
    cancelBooking
}