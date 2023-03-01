import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema({
  categoryName: {
    type: mongoose.Schema.Types.String,
    required: true,
    enum:["Bike","Car","Other"]
    
  } 
},{timestamps:true})

const  category= mongoose.model("Category", categorySchema)
export default category
