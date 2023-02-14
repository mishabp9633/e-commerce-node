import express from "express"

import { getAllSubcategory,
         saveSubcategory,
         updateSubcategory,
         deleteSubcategory
 } from "../controllers/subcategory.controller.js"

import { adminMiddleware, roleCheckMiddleware } from "../middlewares/auth.middleware.js"
import { subcategoryValidator } from "../middlewares/subcategory.validator.js"


const router = express.Router()
const path = "/subcategory"

//..........admin............//
router.post(`${path}/new`,subcategoryValidator,adminMiddleware,saveSubcategory)
router.put(`${path}/update/:id`,adminMiddleware,updateSubcategory)
router.delete(`${path}/delete/:id`,adminMiddleware,deleteSubcategory)

//........admin and seller.........//
router.get(`${path}/all`,roleCheckMiddleware,getAllSubcategory)

export default router