import express from "express"

import { getAllCategory,
         saveCategory,
         updateCategory,
         deleteCategory
 } from "../controllers/category.controller.js"

import { role, roleCheckMiddleware, ROLES } from "../middlewares/auth.middleware.js"
import { categoryValidator } from "../middlewares/category.validator.js"


const router = express.Router()
const path = "/category"

//..........admin............//
router.post(`${path}/new`,roleCheckMiddleware,role.check(ROLES.admin),categoryValidator,saveCategory)
router.put(`${path}/update/:id`,roleCheckMiddleware,role.check(ROLES.admin),updateCategory)
router.delete(`${path}/delete/:id`,roleCheckMiddleware,role.check(ROLES.admin),deleteCategory)

//........admin and seller.........//
router.get(`${path}/all`,roleCheckMiddleware,role.check(ROLES.admin),getAllCategory)

export default router