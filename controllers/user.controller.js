import {
    getAllData, getSingleData, update, Delete, save, forgotPassword
} from '../services/user.service.js'
import nodemailer from 'nodemailer'
import crypto from 'crypto'

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
        const token = crypto.randomBytes(20).toString('hex');
        const resetLink = `http://localhost:3001/user-resetPassword/${token}`;


        const result = await forgotPassword(email, token,resetLink)

        res.status(200).send({ message: 'Password reset email sent' });
    } catch (error) {
        // res.status(500).send({ message: 'Error sending password reset email' });
        next(error)
    }
}


export async function reset(req, res, next) {

    try {
            const result = await resetPassword()
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).send({token})
    } catch (err) {
        next({ err })
    }
}

