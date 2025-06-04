import mongoose from "mongoose";
import { expect } from 'chai';
import userModel from "../src/dao/models/User.js";
import dotenv from 'dotenv';
import app from '../src/app.js';
import request from 'supertest';

describe('User API', () => {
    dotenv.config();
    let userID;
    let server;
    before (async () => {
        await mongoose.connect(process.env.MONGO_URL);
        server = app.listen(8080)
    });
    
    after(async () => {
        await userModel.deleteMany({});
        await mongoose.connection.close();
        server.close()
    })

    it("Registrar nuevo user",async ()=>{
        const res = await request(server).POST('/api/sessions/reguster').send({
            first_name:"John",
            last_name:"Doe",
            email:`johndoe${crypto.randomUUID().toString('hex')}@email.com`,
            password:"1234567"
        })
        expect(res.status).to.equal(201);
        userID = res.body.payload._id
    })

    it("Get User by ID.", async() =>{
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