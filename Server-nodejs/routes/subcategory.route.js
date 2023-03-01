import express from "express"

import { getAllSubcategory,
         saveSubcategory,
         updateSubcategory,
         deleteSubcategory
 } from "../controllers/subcategory.controller.js"

import { subcategoryValidator } from "../middlewares/subcategory.validator.js"
import { role, roleCheckMiddleware, ROLES } from "../middlewares/auth.middleware.js"


const router = express.Router()
const path = "/subcategory"

//..........admin............//
router.post(`${path}/new`,subcategoryValidator,roleCheckMiddleware,role.check(ROLES.admin),saveSubcategory)
router.put(`${path}/update/:id`,roleCheckMiddleware,role.check(ROLES.admin),updateSubcategory)
router.delete(`${path}/delete/:id`,roleCheckMiddleware,role.check(ROLES.admin),deleteSubcategory)

//........admin and seller.........//
router.get(`${path}/all`,roleCheckMiddleware,role.check(ROLES.admin_seller),getAllSubcategory)

export default router