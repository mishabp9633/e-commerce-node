import  express from 'express'
import { signIn } from '../controllers/auth.controller.js'



const router = express.Router()
const path = "/auth"

router.post(`${path}/user-signin`,signIn)

export default router

