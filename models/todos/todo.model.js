import mongoose from "mongoose"
const todoSchema =new mongoose.schema(
  {
     content :{
       type:String,
       required:true
     },
     complete:{
       type:Boolean,
       default:false
     },
     //since it will be created by some user so to store that data we are using this
     createdby:{
       type: mongoose.Schema.Types.ObjectId,
       ref:"User"
     } ,
     //since one to do list will consist of more sub to do which we will make type of array
     //and it will have sub_todo.model.js  reference and will be created in that formate
     //the array will have object stored in the same formate as mentioned in sub_todo
     subTodos:[{
       type:mongoose.Schema.Types.ObjectId,
       ref: "Subtodo"
     }]
  },
  {
    timestamps:true
  });
  export const  Todo = mongoose.model("Todo" ,todoSchema);