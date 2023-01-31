import {
    getAllData, getSingleData, update, Delete, save, forgotPassword,resetPassword
} from '../services/user.service.js'
import nodemailer from 'nodemailer'
import crypto from 'crypto'
import {google} from 'googleapis'
import jwt from 'jsonwebtoken'
import userModel from "../models/user.model.js"



export async function userData(req, res, next) {
    try {
        const userdata = req.body

        const result = await save(userdata)
        res.send(result)
    }
    catch (err) {
        next(err)
    }
}


export async function getusers(req, res, next) {
    try {
        const result = await getAllData()

        res.send(result)
    }
    catch (err) {
        next(err)
    }
}



export async function getuser(req, res, next) {
    try {
        const result = await getSingleData(req.params.id)
        res.send(result)
    } catch (err) {
        next(err)
    }
}


export async function updateData(req, res, next) {
    try {
        const userId = req.params.id
        const userdata = req.body

        const result = await update(userId, userdata)
        res.send(result)
    } catch (err) {
        next(err)
    }

}


export async function deleteData(req, res, next) {
    try {
        const result = await Delete(req.params.id)
        res.send(result)
    } catch (err) {
        next(err)
    }

}


export async function forgot(req, res, next) {
    try {
        const email = req.body.email
        const CLIENT_ID = '261506540726-neof85m9rpj29lag1tm2vr7aujfchjn9.apps.googleusercontent.com'
        const CLIENT_SECRETE = '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'
        const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
        const REFRESH_TOKEN = '1//043UDkLwTMAqUCgYIARAAGAQSNwF-L9Irp-Af7OmXqdOPFYBflf2mjrxEJ0K-Mvm2N0RGfmRJDE81ZcGizszg4tu6enWJwG-WJQg'

        const user = await userModel.findOne({ email });
        if (!user) {
           return  res.status(400).send({ message: 'User not found' });
        }

        const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRETE,REDIRECT_URI)
        oAuth2Client.setCredentials({refresh_token : REFRESH_TOKEN})
        const accessToken = await oAuth2Client.getAccessToken()
        
        // const token = crypto.randomBytes(20).toString('hex');
        // const resetLink = `http://localhost:3001/user-resetPassword/${token}`;


        const result = await forgotPassword(email,CLIENT_ID,CLIENT_SECRETE,REDIRECT_URI,REFRESH_TOKEN,accessToken)

        res.status(200).send({result});
    } catch (error) {
        // res.status(500).send({ message: 'Error sending password reset email' });
        next(error)
    }
}


export async function reset(req, res, next) {

    try {
        const token = req.params.token

        const user = await userModel.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
            })
        if (!user) {
            return res.status(404).send({ message: 'Password reset token is invalid or has expired' });
          }

      
       const confirmPassword = req.body.confirmPassword
       const password = req.body.password

            const result = await resetPassword(confirmPassword,password,token)
            res.status(200).send({message:'password updated successfully'})

    } catch (err) {
        next({ err })
    }
}

