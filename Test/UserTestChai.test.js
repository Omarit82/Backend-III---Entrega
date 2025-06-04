import mongoose from "mongoose";
import chai, { expect } from 'chai';
import userModel from "../src/dao/models/User.js";

describe('User Test', () => {
    let email ="";
    before (async () => {
        await mongoose.connect('mongodb+srv://roselliomar82:piperpa11@unidad2.fpojkty.mongodb.net/?retryWrites=true&w=majority&appName=Unidad2')
    });
    it("Create User",async ()=>{
        const user = {
            first_name:"John",
            last_name:"Doe",
            email:`johndoe${crypto.randomUUID().toString('hex')}@email.com`,
            password:"1234567"
        }
        const message = await userModel.create(user);
        email = message.email;
        expect(message._id).to.exist; //Existe un id
    })

    it("Get User by email.", async() =>{
        const user = await userModel.findOne({email:email});
        expect(user.email).to.equal(email); //Verificacion del correo.
    })
    it("Update User", async () =>{
        const userUpdate = await userModel.findOneAndUpdate(
            {email:email},
            {$set: {first_name:"Other"}},
            {new:true}
        )
        expect(userUpdate.first_name).to.equal("Other")
    })
    it("Delete User",async () =>{
        const userDeleted = await userModel.findOneAndDelete({email:email});
        expect(userDeleted.email).to.equal(email);
    })
})