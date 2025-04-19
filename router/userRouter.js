import express from "express";



let userRouter = express.Router()

userRouter.get("/",
    (req,res)=>{
        res.json({
            message : "get router in user"
        })
    }
)

userRouter.post("/",
    (req,res)=>{
        res.json({
            message : "post router in user"
        })
    }
)



export default userRouter