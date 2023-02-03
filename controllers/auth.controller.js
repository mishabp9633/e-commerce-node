import userModel from "../models/user.model.js";
import { login } from "../services/auth.service.js";




//login 
export async function signIn(req, res, next) {
  
    const loginData = req.body
  
    try {
      const response = await login(loginData)
        res.send(response);
      }
    catch (error) {
      next({error});
    } 
} 


export async function logoutUser(req, res, next) {
  try {
      res.cookie('x-auth-token')
      res.status(200).send({ message: 'Successfully logged out' });
  
  } catch (err) {
    next(err);
  }
}