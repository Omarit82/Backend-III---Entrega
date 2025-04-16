import petModel from "../dao/models/Pet.js";
import userModel from "../dao/models/User.js";
import { generatePet,generateUser } from "../utils/faker.js";



export const genPets = async(req,res)=>{
    let pets = [];
    for (let i=0; i<50; i++){
        pets.push(generatePet())
    }
    console.log(pets);
    res.status(200).json({"Pets: ":pets})
}

export const genUsers = async(req,res)=>{
    const users = generateUser(process.env.MOCKUSERS);
    console.log(users);
    res.status(200).json({"Users: ":users})
}

export const insertRegisters = async(req,res)=>{
    try {
        const qtyPets = req.params.pets;
        const qtyUsers = req.params.users;
        const users =[];
        const pets = [];
        for (let i=0; i<qtyUsers ; i++){
            const user = generateUser(1);
            const newUser = await userModel.create(user);
            users.push(newUser);
        }
        for (let i=0; i<qtyPets ; i++){
            const pet = generatePet(1);
            const newPet = await petModel.create(pet);
            pets.push(newPet);
        }
        res.status(201).send({message:"User and pets created",users:users,pets:pets})
        
    } catch (error) {
        console.log(error)
    }
}