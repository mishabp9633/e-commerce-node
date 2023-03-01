import  express from 'express'
import {
    getuser,getusers,updateData,
    deleteData,userData, forgot,reset,
    getUserByToken,updateUserByToken,
    getAdminByToken,deleteUserByToken
} from '../controllers/user.controller.js'

import { userMiddleware } from '../middlewares/user.middleware.js'
import { role, roleCheckMiddleware, ROLES } from "../middlewares/auth.middleware.js"


const router = express.Router()
const path = "/user"

//..............seller..............//
router.post(`${path}/signup`,userMiddleware,userData)
router.post(`${path}/forgotpassword`,roleCheckMiddleware,role.check(ROLES.seller),forgot)
router.post(`${path}/resetpassword/:id`,roleCheckMiddleware,role.check(ROLES.seller),reset)
router.post(`${path}/get`,roleCheckMiddleware,role.check(ROLES.seller),getUserByToken)
router.post(`${path}/update`,roleCheckMiddleware,role.check(ROLES.seller),updateUserByToken)
router.post(`${path}/delete`,roleCheckMiddleware,role.check(ROLES.seller),deleteUserByToken)


//............admin...............//
router.get(`${path}/user-all`,roleCheckMiddleware,role.check(ROLES.admin),getusers)
router.get(`${path}/user-single/:id`,roleCheckMiddleware,role.check(ROLES.admin),getuser)
router.put(`${path}/user-update/:id`,roleCheckMiddleware,role.check(ROLES.admin),updateData)
router.delete(`${path}/user-delete/:id`,roleCheckMiddleware,role.check(ROLES.admin),deleteData)
router.post(`${path}/get`,roleCheckMiddleware,role.check(ROLES.admin),getAdminByToken)


export default router

