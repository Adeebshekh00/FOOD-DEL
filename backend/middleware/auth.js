import jwt from "jsonwebtoken"


//taking the token and convert it into user id
const authMiddleware = async(req,res,next) =>{
     const {token} = req.headers;
     if(!token){
        return res.json({success:false,message:"Not authorised login again."})
     }
     try{
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
     }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
     }
}



export default authMiddleware;