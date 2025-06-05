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
    let port;
    before(async() => {
        mongoose.connect(process.env.MONGO_URL);
        await new Promise (resolve => {
            server = app.listen(0, ()=>{
                port = server.address().port;
                console.log(`Test server started on port: ${port}`);
                resolve();
            })
        })
    });
    
    after(async () => {
        await userModel.deleteMany({});
        await mongoose.connection.close();
        await new Promise(resolve => {
            server.close(()=>{
                console.log("Test server closed");
                resolve();
            });
        });
    });

    it("Registrar nuevo user",async ()=>{
        const response = await request(server)
            .post('/api/sessions/register')
            .send({
            first_name:"John",
            last_name:"Doe",
            email:`johndoe${crypto.randomUUID().toString('hex')}@email.com`,
            password:"1234567"
        })
        expect(response.status).to.equal(201);
        userID = response.body.payload._id;
    });

    it("Get User by ID.", async() =>{
        const res = await request(server)
        .get(`/api/users/${userID}`)
        expect(res.status).to.equals(200);
        expect(res.body.payload._id).to.equal(userID);
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