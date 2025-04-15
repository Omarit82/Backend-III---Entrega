import { Router } from "express";
import { generateUser } from "../utils/faker.js";

const userRouter = Router();

userRouter.get('/create',async(req,res)=>{
    //TODO
})

export default userRouter;