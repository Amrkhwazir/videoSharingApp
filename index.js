import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";

const app = express();
dotenv.config()
const port = 8000;

const connect = () => {
    mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("DB connected");
    }).catch((err)=>{
        throw err 
    })
}

app.use("/api/users", userRouter);



app.listen(port, ()=>{
    console.log(`server in running in port number ${port}`)
    connect()
})