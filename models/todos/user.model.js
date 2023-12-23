import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
      lowercase:true,
      unique:true
    } ,
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    password:{
      type:String,
      required:true,
      min: [6, 'Must be at least 6 length}'],
    }
  },
  //using timestamps which consist of createdAt and updatedAt  their times
  {
    timestamps:true
  });

export const User = mongoose.model('User', userSchema);
