import mongoose from "mongoose";

// creating schema
const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description: {type:String, required:true},
    price: {type:Number,required:true},
    category: {type:String,required:true},
    image: {type:String,required:true},
})

//creating model
//if model is there use the existing model
const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)

export default foodModel;