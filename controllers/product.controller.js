import { deleteProductByToken,
     getAll, getProductByToken,
      save, updateProductByToken 
    } from "../services/product.service.js"
    
import cloudinary from '../utils/cloudinary.utils.js'


export async function saveProduct(req, res, next) {
    try {
      const userId = req.body.user._id
      const productData = req.body
      console.log("productData",productData)
  
      // Create an array to store the uploaded photo URLs and public IDs
      const photos = []
  
      // Loop over the uploaded files and upload each one to Cloudinary
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path)
        photos.push({
          publicId: result.public_id,
          url: result.secure_url
        });
      }
  
      productData.photos = photos;
  
      const product = await save({
        ...productData,
        userId: userId,
        location: {
          type: "Point",
          coordinates: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)],
          
        }
      });
  
      res.status(200).send(product);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  


export async function getAllProduct(req,res,next){
    try{
        const result = await getAll()
        console.log('result',result)
        res.status(200).send(result)
    }catch(err){
        console.log(err);
        next(err)
    }    
}

export async function getAllProductUserByToken(req,res,next){
    try{
        const userId = req.body.user._id
        const result = await getProductByToken(userId)
        console.log('result',result)
        res.status(200).send(result)
    }catch(err){
        console.log(err);
        next(err)
    }    
}


export async function deleteProduct(req,res,next){
    try{
        const productId = req.params.id
        const result = await Delete(productId)
        console.log('result',result)
        res.status(200).send(result)
    }catch(err){
        console.log(err);
        next(err)
    }    
}



export async function updateProductDataByToken(req,res,next){
    try{
        const userId = req.body.user._id
        const productId = req.params.id
        const productData = req.body
        console.log(productData);
        const result = await updateProductByToken(userId,productData,productId)
        console.log('result',result)
        res.status(200).send(result)
    }catch(err){
        console.log(err);
        next(err)
    }    
}


export async function deleteProductDataByToken(req,res,next){
    try{
        const userId = req.body.user._id
        const productId = req.params.id
        const result = await deleteProductByToken(userId,productId)
        console.log('result',result)
        res.status(200).send(result)
    }catch(err){
        console.log(err);
        next(err)
    }    
}



