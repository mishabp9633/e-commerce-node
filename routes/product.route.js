import { getAllProduct, saveProduct, 
    getAllProductUserByToken, updateProductDataByToken,
     deleteProductDataByToken ,updateProductPhotoByToken
    } from '../controllers/product.controller.js'

import { adminMiddleware, sellerMiddleware } from '../middlewares/auth.middleware.js'
import express from 'express'
import { Delete } from '../services/product.service.js'
import multer from 'multer'


const storage = multer.diskStorage({})
const upload = multer({storage})

const router = express.Router()
const path = "/product"

//...........seller...........//
router.post(`${path}/new`,upload.array('photos'),sellerMiddleware,saveProduct)
router.get(`${path}/seller/all`,sellerMiddleware,getAllProductUserByToken)
router.put(`${path}/seller/update/:id`,sellerMiddleware,updateProductDataByToken)
router.put(`${path}/seller/update/photos/:id`,upload.array('photos'),sellerMiddleware,updateProductPhotoByToken)
router.delete(`${path}/seller/delete/:id`,sellerMiddleware,deleteProductDataByToken)

//...........admin..............//
router.get(`${path}/admin/all`,adminMiddleware,getAllProduct)
router.delete(`${path}/admin/delete`,adminMiddleware,Delete)



export default router

