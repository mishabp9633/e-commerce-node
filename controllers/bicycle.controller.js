import { save } from "../services/bicycle.service.js"
import { findCategoryId } from "../services/subcategory.service.js"


export async function saveBicycle(req,res,next){
    try{
        const userId = req.body.user._id
        const bicycleData = req.body
        const subcategoryId = req.body.subcategoryId
        const {categoryId} = await findCategoryId(subcategoryId)
        console.log(categoryId)
        const newBicycle = await save({...bicycleData,
            categoryId:categoryId,
            userId:userId,
            location:{
                    type:"Point",
                    coordinates:[parseFloat(req.body.longitude),parseFloat(req.body.latitude)]
                }
        })
        res.status(200).send(newBicycle)
    }catch(err){
        console.log(err)
        next(err)
    }
}