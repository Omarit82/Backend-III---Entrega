import { Router } from "express";
import { generateUser } from "../utils/faker.js";

const userRouter = Router();

userRouter.get('/generate',async(req,res)=>{
    let users =[];
    for (let i=0; i<20 ; i++){
        users.push(generateUser())
    }
    console.log(users);
    res.status(200).json({"Users: ":users})
})

export default userRouter;