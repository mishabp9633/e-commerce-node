import mongoose from "mongoose";

export const motorcycleSchema = new mongoose.Schema({
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
        enum:['Royal enfield', 'Suzuki', 'Honda', 'Hero','Bajaj', 'Yamaha', 'KTM', 'Other brand']
    },
    kmDriven: {
        type: Number,
        required: true,
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
    motorcyclePhotos:[{
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

},{ timestamps: true })

motorcycleSchema.index({ location: "2dsphere" });


const motorcycle = mongoose.model("Motorcycle", motorcycleSchema)
export default motorcycle