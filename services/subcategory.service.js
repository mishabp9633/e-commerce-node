import HttpException from 'http-exception'
import subcategoryModel from '../models/subcategory.model.js'

export async function save(data){
   const subcategory = await subcategoryModel.create({...data})
   return{subcategory}
}

export async function getAll(){
    const subcategory = await subcategoryModel.find()
    .populate('categoryId',"categoryName")
    return{subcategory}
 }

 export async function update(id,data){
    const subcategory = await subcategoryModel.findByIdAndUpdate(id,data,{new:true})
    if(!subcategory) throw new HttpException(404, "subcategory not found")
    return{subcategory}
 }

 export async function Delete(id){
    const subcategory = await subcategoryModel.findByIdAndDelete(id)
    if(!subcategory) throw new HttpException(404, "subcategory not found")
    return{subcategory}
 }