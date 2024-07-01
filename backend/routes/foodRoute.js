import express from 'express'
import { addFood,listFood, removeFood} from '../controllers/foodController.js'
import multer from "multer" // for image storage system

const foodRouter  = express.Router();

//image storage Engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`) // creating a unique name for uploaded file
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);

export default foodRouter;
