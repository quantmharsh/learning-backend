import mongoose from 'mongoose';
const productSchema= new mongoose.Schema({
description:{
  type:String ,
  required:true
} ,
name:{
  type:String,
  required:true
} ,
//will store image on cloudnery and will store it url
productImage:{
  type:String

},
price:{
  type:Number,
  default:0

},
stock:{
  type:Number,
  default:0
}
},
{
  timestamps:true
})
export const Product = new mongoose.model("Product" ,productSchema);