import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
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