import mongoose from "mongoose";

export const subcategorySchema = new mongoose.Schema({

    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
  subcategoryName: {
    type: mongoose.Schema.Types.String,
    required: true,
  } 

},{timestamps:true})

const  subcategory= mongoose.model("Subcategory", subcategorySchema)
export default subcategory
