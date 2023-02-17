import { save } from "../services/motorcycle.service.js"
import { findCategoryId } from "../services/subcategory.service.js"


export async function saveMotorcycle(req,res,next){
    try{
        const userId = req.body.user._id
        const motorcycleData = req.body
        const subcategoryId = req.body.subcategoryId
        const {categoryId} = await findCategoryId(subcategoryId)
        console.log(categoryId)
        const newMotorcycle = await save(
            {
                ...motorcycleData,
                categoryId:categoryId,
                userId:userId,
                location:{
                    type:"Point",
                    coordinates:[parseFloat(req.body.longitude),parseFloat(req.body.latitude)]
                }
        })
        res.status(200).send(newMotorcycle)
    }catch(err){
        console.log(err)
        next(err)
    }
}