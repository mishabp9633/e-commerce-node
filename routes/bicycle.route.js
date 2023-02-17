import  express from 'express'
import { saveBicycle } from '../controllers/bicycle.controller.js'
import { sellerMiddleware } from '../middlewares/auth.middleware.js'



const router = express.Router()
const path = "/bicycle"

router.post(`${path}/new`,sellerMiddleware,saveBicycle)


export default router

