import mongoose from "mongoose";

export const motorcycleSchema = new mongoose.Schema({

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

}, { timestamps: true })

const motorcycle = mongoose.model("Motorcycle", motorcycleSchema)
export default motorcycle