import { login } from "../services/auth.service.js";


//login 
export async function signIn(req, res, next) {
  
    const loginData = req.body
  
    try {
      const response = await login(loginData)
      res.status(200).send(response);
      }
    catch (err) {
      console.log(err);
      next(err);
    } 
} 


export async function logoutUser(req, res, next) {
  try {
      res.cookie('x-auth-token')
      res.status(200).send({ message: 'Successfully logged out' });
  
  } catch (err) {
    console.log(err);
    next(err);
  }
}