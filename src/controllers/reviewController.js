const ReviewService = require('./../service/reviewService');

const createReview = async (req, res) => {
    try{
       const review = await ReviewService.createReview(req.body);
       res.status(200).json({
            success : true,
            message : "Successfully created review",
            data : review
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


const getReview = async (req, res)=>{
    try{
        const review = await ReviewService.getReview(req.params.userId, req.params.flightNumber);
        res.status(200).json({
             success : true,
             message : "Successfully fetched review",
             data : review
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


const getAllReviews = async (req, res)=>{
    try{
        const reviews = await ReviewService.getAllReviews(req.params.flight);
        res.status(200).json({
             success : true,
             message : "Successfully fetched all reviews",
             data : reviews
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


const destroyReview = async (req, res)=>{
    try{
        const review = await ReviewService.destroyReview(req.params.id);
        res.status(200).json({
             success : true,
             message : "Successfully deleted review",
             data : review
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
    createReview,
    getReview,
    getAllReviews,
    destroyReview
}