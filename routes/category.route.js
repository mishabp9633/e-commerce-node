import express from "express"

import { getAllCategory,
         saveCategory,
         updateCategory,
         deleteCategory
 } from "../controllers/category.controller.js"

import { adminMiddleware, roleCheckMiddleware } from "../middlewares/auth.middleware.js"
import { categoryValidator } from "../middlewares/category.validator.js"


const router = express.Router()
const path = "/category"

//..........admin............//
router.post(`${path}/new`,adminMiddleware,categoryValidator,saveCategory)
router.put(`${path}/update/:id`,adminMiddleware,updateCategory)
router.delete(`${path}/delete/:id`,adminMiddleware,deleteCategory)

//........admin and seller.........//
router.get(`${path}/all`,roleCheckMiddleware,getAllCategory)

export default router