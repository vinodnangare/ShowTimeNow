import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config({path:"../.env"});
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("ShowTimeNow Server is Running Now");
});

const PORT=process.env.PORT||8090;

const connectDB=async ()=>{
  try{ await mongoose.connect(process.env.DB_URL);
     console.log("DB connected successfully");
  }
  catch(error){
    
    console.error("Connection Failed With database");
  }


};

app.listen(PORT,()=>{
    
    console.log(`Server is running at port ${PORT}`)
    connectDB();
})
