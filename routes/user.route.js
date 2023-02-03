import  express from 'express'
import {
    getuser,getusers,updateData,deleteData,userData, forgot,reset
} from '../controllers/user.controller.js'
import { userMiddleware } from '../middlewares/user.middleware.js'


const router = express.Router()
const path = "/user"

router.post(`${path}/user-signup`,userData,userMiddleware)

router.get(`${path}/user-all`,getusers)

router.get(`${path}/user-single/:id`,getuser)

router.put(`${path}/user-update/:id`,updateData)

router.delete(`${path}/user-delete/:id`,deleteData)

router.post(`${path}/user-forgotpassword`,forgot)

router.post(`${path}/user-resetpassword/:id`,reset)

export default router

