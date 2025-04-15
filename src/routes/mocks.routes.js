import { Router } from "express";
import { generatePet,generateUser } from "../utils/faker.js";

const mocksRouter = Router();

mocksRouter.get('/mockingpets', async(req,res)=>{
    let pets = [];
    for (let i=0; i<50; i++){
        pets.push(generatePet())
    }
    console.log(pets);
    res.status(200).json({"Pets: ":pets})
})

mocksRouter.get('/mockingusers', async(req,res)=>{
    const users = generateUser(process.env.MOCKUSERS);
    console.log(users);
    res.status(200).json({"Users: ":users})
})


export default mocksRouter;