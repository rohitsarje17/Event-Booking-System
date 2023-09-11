import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";


dotenv.config();
const app=express();

//middlewares
app.use(express.json());
app.use("/user",userRouter);
app.use("/admin",adminRouter);



mongoose
.connect(
    `mongodb+srv://rohit:${process.env.MONGODB_PASSWORD}@cluster0.oqmsphm.mongodb.net/?retryWrites=true&w=majority`
    ).then(()=>{
        app.listen(8000,()=>{
            console.log("Server started !");
            console.log(`Connect to the port ${8000}`);
        })        
    }).catch((e)=> console.log(e));









//EpahKwNXG7zg8ngp