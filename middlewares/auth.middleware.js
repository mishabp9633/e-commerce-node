import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";


export function verifyUser(req,res,next){
    const token = req.header('x-auth-token')

if (!token) {
    res.status(401).send("Access denied.No token provided")
}
try {
    
    const decoded = jwt.verify(token,process.env.TOKEN_KEY)
    const user = new userModel.findOne({_id: decoded._id})
    console.log('user:' ,user._id);
    req.body.user = user
    next()
} catch (error) {
    res.status(400).send("Invalid token")
}
}



export async function adminMiddleware(req,res,next){
    const token = req.header('x-auth-token')

if (!token) {
    res.status(401).send({message:"Access denied.No token provided"})
}
try {
    
    const decoded = jwt.verify(token,process.env.TOKEN_KEY)
    const user = new userModel.findOne({_id: decoded._id})
    console.log('user:' ,user._id);

    if(user.role !='admin')
    res.status(403).send({message:'Access denied . Not an admin'})
    req.body.user = user
    next()
} catch (error) {
    res.status(400).send({message:"Invalid token"})
}
}

//single checking
export async function roleCheckMiddleware(req, res, next) {
    const token = req.header('Authorization') && req.header('Authorization').split('Bearer ')[1] || null;
    if (!token) {
        return res.status(401).send({ message: "Access denied. No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        const user = await userModel.findOne({ _id: decoded._id });
        if (!user) {
            return res.status(400).send({ message: 'Invalid user' });
        }

        switch (user.role) {
            case 'seller':
                case 'admin':       
                req.body.user = user;
                next();
                break;
            default:
                return res.status(403).send({ message: 'Access denied. Not an authorized role' });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Invalid token" });
    }
}


export async function sellerMiddleware(req,res,next){
    const token = req.header('x-auth-token')

if (!token) {
    res.status(401).send({message:"Access denied.No token provided"})
}
try {
    
    const decoded = jwt.verify(token,process.env.TOKEN_KEY)
    const user = new userModel.findOne({_id: decoded._id})
    console.log('user:' ,user._id);

    if(user.role !='seller')
    res.status(403).send({message:'Access denied . Not an seller'})
    req.body.user = user
    next()
} catch (error) {
    res.status(400).send({message:"Invalid token"})
}
}