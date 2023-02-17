import bicycleModel from "../models/bicycle.model.js"
import {HttpException} from '../exceptions/exceptions.js';

export async function save(Data){
    const bicycle = await bicycleModel.create({...Data})
    return {bicycle}
}