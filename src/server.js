import express from 'express'
import compression from 'express-compression';
import userRouter from "./routes/users.routes.js"
import mocksRouter from "./routes/mocks.routes.js"

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(compression({
    brotli:{enabled:true, zlib:{}}
}))

app.use('/api/users',userRouter);
app.use('/api/mocks', mocksRouter)

app.get('/',(req,res)=>{
    res.status(200).json({message:'connected'})
})

app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`)
})