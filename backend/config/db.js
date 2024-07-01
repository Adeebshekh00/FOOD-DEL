// connecting with database 
import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('idhar mat dekho').then(()=>console.log("DB connected"));
}