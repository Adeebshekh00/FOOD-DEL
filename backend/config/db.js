// connecting with database 
import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://AdeebShekh:95804adeebsh@cluster0.zsp1s76.mongodb.net/food-del').then(()=>console.log("DB connected"));
}