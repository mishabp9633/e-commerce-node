export function errorHandling(err,req,res,next){
    res.status(500).json({error: err.message || "something went wrong"})
   
}
