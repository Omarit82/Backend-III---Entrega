import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from "./routes/mocks.routes.js";

dotenv.config()
const app = express();
const PORT = process.env.PORT||8080;
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connected");
}).catch(()=>{
    console.log("DB Connection error!");
})

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter)

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
