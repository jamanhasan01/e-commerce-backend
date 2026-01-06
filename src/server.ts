import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes'
import connectDB from './config/connectDB'
dotenv.config()
const app=express()
// Connect to Database
connectDB();

app.get('/',(req,res)=>{

    res.send("server running well")

})


/* ===============================
   Global Middlewares
================================ */
app.use(express.json());

/* ===============================
   API Routes
================================ */
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT,()=>{
    console.log('server running on ',process.env.PORT);
    
})

