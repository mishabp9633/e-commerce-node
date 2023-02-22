import mongoose from "mongoose";

const googleUserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  picture: {
    type: String, 
  },
  role: {
    type:String,
    default:"seller"
  }
})

const googleUser = mongoose.model("Googleuser", googleUserSchema);
export default googleUser;