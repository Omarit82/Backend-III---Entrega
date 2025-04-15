import express from 'express';
import dotenv from 'dotenv';
import compression from 'express-compression';
import mocksRouter from "./routes/mocks.routes.js";
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use(compression({
    brotli:{enabled:true, zlib:{}}
}))

app.use('/api/mocks', mocksRouter)

app.get('/',(req,res)=>{
    res.status(200).json({message:'connected'})
})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connected");
}).catch(() => {
    console.log("DB Connection error!");
})

app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`)
})