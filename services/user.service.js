import userModel from "../models/user.model.js"
import nodemailer from "nodemailer"

export async function save (userdata){

        const result = new userModel(userdata)
       await result.save()
        return {result}
    
}


export async function getAllData (){
    const result =await userModel.find()
    return {result}
}


export async function getSingleData(id){
    const result = await userModel.findById(id)
    return {result}
}


export async function update(req,res){
    const result = await userModel.findByIdAndUpdate(userId,userdata,
    
    {
        new:true
    })
return {result}
}

export async function Delete (id){
    const result = await userModel.findByIdAndDelete(id)
    return {result}
}


export async function forgotPassword(email,token,resetLink){
    const user = await userModel.findOne({email}) 
    if (!user){
        res.status(400).send({message:'user not found'})
    }
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your_gmail_address@gmail.com',
            pass: 'your_gmail_password'
        }
    });

    const mailOptions = {
        from: 'your_gmail_address@gmail.com',
        to: user.email,
        subject: 'Password Reset',
        html: `<p>Please click <a href="${resetLink}">here</a> to reset your password</p>`
    }

    // Generate a unique token and send password reset link via email

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Password reset email sent: ${info.response}`);
      }
    });
    return {user}
  } 

export async function updatePassword(){
      // Check if the token is valid and has not expired
      const user = await userModel.findOne({
        resetPasswordToken: req.params.token,
        resetPasswordExpires: { $gt: Date.now() }
      });
      if (!user) {
        return res.status(404).send({ message: 'Password reset token is invalid or has expired' });
      }
          // Update the user's password
    user.password = req.body.password;
    user.confirmPassword=req.body.confirmPassword
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

return {user}
}