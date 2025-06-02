import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import indexRoutes from './routes/index.routes.js';

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

app.use('/',indexRoutes);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
