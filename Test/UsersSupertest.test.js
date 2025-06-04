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
        const res = await request(server)
        .get(`/api/users/${userID}`)
        expect(res.status).to.equals(200);
        expect(res.body.payload.user._id).to.equal(userID);
    })

    it("Update User by Id", async () =>{
        const res = await request(server)
        .put(`/api/users/${userID}`)
        .send({
            first_name:"OtherName",
            last_name:"OtherLastName"
        })
        expect(res.status).to.equals(200);
        expect(res.body.message).to.equal("User updated");
    })

    it("Delete User by Id",async () =>{
        const res = await request(server)
        .delete(`/api/users/${userID}`)
        expect(res.status).to.equals(200);
        expect(res.body.message).to.equal("User deleted");
    })
})