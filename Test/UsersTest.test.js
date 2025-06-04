import mongoose from "mongoose";
import assert from 'assert';
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
        assert.ok(message._id);
    })
    it("Get User by email.", async() =>{
        const user = await userModel.findOne({email:email});
        assert.ok(user);
    })
    it("Update User", async () =>{
        const userUpdate = await userModel.findOneAndUpdate(
            {email:email},
            {$set: {first_name:"Other"}},
            {new:true}
        )
        assert.strictEqual(userUpdate.first_name,"Other");
    })
    it("Delete User",async () =>{
        const userDeleted = await userModel.findOneAndDelete({email:email});
        assert.ok(userDeleted)
    })
})