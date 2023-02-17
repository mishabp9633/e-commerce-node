import  express from 'express'
import { saveMotorcycle } from '../controllers/motorcycle.controller.js'
import { sellerMiddleware } from '../middlewares/auth.middleware.js'



const router = express.Router()
const path = "/motorcycle"

router.post(`${path}/new`,sellerMiddleware,saveMotorcycle)


export default router

