import mongoose from "mongoose";

const User = mongoose.Schema(
  {
    username: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    role: {
        type:String,
        required:true,
        default:'User'
    },
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", User);