const AirLineService = require('../service/airlineService');

const createAirline = async (req, res) => {
    try{
       const airline = await AirLineService.createAirline(req.body);
       res.status(200).json({
            success : true,
            message : "Successfully created airline",
            data : airline
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


const getAirline = async (req, res)=>{
    try{
        const airline = await AirLineService.getAirline(req.params.name);
        res.status(200).json({
             success : true,
             message : "Successfully fetched airline",
             data : airline
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


const getAllAirlines = async (req, res)=>{
    try{
        const airlines = await AirLineService.getAllAirlines();
        res.status(200).json({
             success : true,
             message : "Successfully fetched all airlines",
             data : airlines
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


const destroyAirline = async (req, res)=>{
    try{
        const airline = await AirLineService.destroyAirline(req.query.name);
        res.status(200).json({
             success : true,
             message : "Successfully deleted airline",
             data : airline
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
    createAirline,
    getAirline,
    getAllAirlines,
    destroyAirline
}