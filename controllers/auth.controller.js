import userModel from "../models/user.model.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


//login 
export async function signIn(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
  
  
    try {
      let user = await userModel.findOne({ username: username });
      console.log("user: ", user);
  
      if (!user) {
        return res.status(500).send("Username is invalid!");
      } else {
  
        const validpassword = await bcrypt.compare(password, user.password);
        console.log("validpassword :", validpassword);
  
        if (!validpassword)
          return res.status(500).send("invalid password");
  
        let token = jwt.sign(
          { _id: user._id },
          process.env.TOKEN_KEY
        );
  
        let tokenRole={
          role:user.role,
          token:token
        }
  
        // user.token = token;
        res.header("x-auth-token", token).send({ tokenRole });
      }
    } catch (error) {
      next(error);
    }
  }
  