import  express from 'express'
import {
    getuser,getusers,updateData,
    deleteData,userData, forgot,reset,
    getUserByToken,updateUserByToken,
    getAdminByToken,deleteUserByToken
} from '../controllers/user.controller.js'

import { adminMiddleware, sellerMiddleware } from '../middlewares/auth.middleware.js'
import { userMiddleware } from '../middlewares/user.middleware.js'


const router = express.Router()
const path = "/user"

//..............seller..............//
router.post(`${path}/signup`,userMiddleware,userData)
router.post(`${path}/forgotpassword`,sellerMiddleware,forgot)
router.post(`${path}/resetpassword/:id`,sellerMiddleware,reset)
router.post(`${path}/get`,sellerMiddleware,getUserByToken)
router.post(`${path}/update`,sellerMiddleware,updateUserByToken)
router.post(`${path}/delete`,sellerMiddleware,deleteUserByToken)


//............admin...............//
router.get(`${path}/user-all`,adminMiddleware,getusers)
router.get(`${path}/user-single/:id`,adminMiddleware,getuser)
router.put(`${path}/user-update/:id`,adminMiddleware,updateData)
router.delete(`${path}/user-delete/:id`,adminMiddleware,deleteData)
router.post(`${path}/get`,adminMiddleware,getAdminByToken)


export default router

