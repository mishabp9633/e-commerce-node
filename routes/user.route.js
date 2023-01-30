import  express from 'express'
import {
    getuser,getusers,updateData,deleteData,userData, forgot,reset
} from '../controllers/user.controller.js'


const router = express.Router()
const path = "/user"

router.post(`${path}/user-signUp`,userData)

router.get(`${path}/user-all`,getusers)

router.get(`${path}/user-single/:id`,getuser)

router.put(`${path}/user-update/:id`,updateData)

router.delete(`${path}/user-delete/:id`,deleteData)

router.post(`${path}/user-forgotPassword`,forgot)

router.post(`${path}/user-resetPassword/:token`,reset)

export default router

