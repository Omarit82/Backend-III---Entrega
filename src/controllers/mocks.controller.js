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
        for (let i=0; i<qtyPets ; i++){
            
        }
    } catch (error) {
        console.log(error)
    }
}