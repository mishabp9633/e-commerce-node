import userModel from '../models/user.model.js'
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import createError from "http-errors"

export async function login(loginData){
   const user = await  userModel.findOne({username:loginData.username})
   
   console.log("user: ", user);

   if (!user) 
    throw createError("User is not found!");
   

     const validpassword = await bcrypt.compare(loginData.password, user.password);
     console.log("validpassword :", validpassword);

     if (!validpassword)
     throw createError("invalid password");

     let token = jwt.sign(
       { _id: user._id },
       process.env.TOKEN_KEY
     ); 
     return {token}
}
