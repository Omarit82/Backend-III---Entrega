import { Router } from "express";
import { generatePet } from "../utils/faker.js";

const mocksRouter = Router();

mocksRouter.get('/mockingpets', async(req,res)=>{
    let pets = [];
    for (let i=0; i<50; i++){
        pets.push(generatePet())
    }
    console.log(pets);
    res.status(200).json({"Pets: ":pets})
})

mocksRouter.get('/mockingUsers', async(req,res)=>{
    let users =[];
        for (let i=0; i<20 ; i++){
            users.push(generateUser())
        }
        console.log(users);
        res.status(200).json({"Users: ":users})
})


export default mocksRouter;