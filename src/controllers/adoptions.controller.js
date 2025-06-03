import EError from "../services/Error/EError.js";
import CustomError from "../services/Error/CustomError.js";
import { generateAdoptionGettingError } from "../services/Error/info.js";
import { adoptionsService, petsService, usersService } from "../services/index.js"

const getAllAdoptions = async(req,res)=>{
    try {
        const result = await adoptionsService.getAll();
        if(!result){
            CustomError.NewError({
                name:"Error adquiring adoptions",
                cause:generateAdoptionGettingError(),
                message:"Error adquiring adoptions",
                code: EError.DATABASE_ERROR
            })
        }
        res.status(200).send({status:"success",payload:result}) 
    } catch (error) {
        res.status(500).send(err)
    }   
}

const getAdoption = async(req,res)=>{
    try {
        const adoptionId = req.params.aid;
        const adoption = await adoptionsService.getBy({_id:adoptionId})
        console.log(adoption);
        if(!adoption) {
            CustomError.NewError({
                name:"Error adquiring adoptions",
                cause:generateAdoptionGettingError(),
                message:"Error adquiring adoptions",
                code: EError.DATABASE_ERROR
            })
        }
        res.status(200).send({status:"success",payload:adoption})
    } catch (error) {
        console.log(error)
        res.status(404).json({error:error})
    }
   
}

const createAdoption = async(req,res)=>{
    const {uid,pid} = req.params;
    const user = await usersService.getUserById(uid);
    if(!user) return res.status(404).send({status:"error", error:"user Not found"});
    const pet = await petsService.getBy({_id:pid});
    if(!pet) return res.status(404).send({status:"error",error:"Pet not found"});
    if(pet.adopted) return res.status(400).send({status:"error",error:"Pet is already adopted"});
    user.pets.push(pet._id);
    await usersService.update(user._id,{pets:user.pets})
    await petsService.update(pet._id,{adopted:true,owner:user._id})
    await adoptionsService.create({owner:user._id,pet:pet._id})
    res.send({status:"success",message:"Pet adopted"})
}

export default {
    createAdoption,
    getAllAdoptions,
    getAdoption
}