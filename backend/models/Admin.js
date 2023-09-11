import mongoose from "mongoose";

const Schema=mongoose.Schema;

const adminSchema = new Schema({
    // name:{
    //     type : String,
    //    // required:true,
    // },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:5,
    },
    addedEvents:[{
        type:String,
    }],
});
export  default mongoose.model("Admin",adminSchema);