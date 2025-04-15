import express from 'express';
import dotenv from 'dotenv';
import compression from 'express-compression';
import userRouter from "./routes/users.routes.js";
import mocksRouter from "./routes/mocks.routes.js";
import mongoose from 'mongoose';

dotenv.config();
const app = express();

app.use(express.json());

app.use(compression({
    brotli:{enabled:true, zlib:{}}
}))

app.use('/api/users',userRouter);
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

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port: ${process.env.PORT}`)
})