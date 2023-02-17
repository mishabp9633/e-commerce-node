import mongoose from "mongoose";

export const bicycleSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    brand: {
        type: String,
        required: true,
        enum:['Hercules', 'Hero', 'Other brand']
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type:Number,
        required: true,
      },
    bicyclePhotos:[{
        type:String
    }],
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    neighbourhood:{
        type:String,
        required:true
    },
    location: {
        type: {
          type: String,
          enum: ["Point"],
          required: true,
        },
        coordinates: {
          type: [Number],
          required: true,
        },
    }

}, { timestamps: true })

bicycleSchema.index({ location: "2dsphere" });

const bicycle = mongoose.model("Bicycle", bicycleSchema)
export default bicycle