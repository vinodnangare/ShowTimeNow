import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import Movie from './model/Movies.js';
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

app.post("/movies",async(req,res)=>{
 try{
    const {
       title,
    description,
    images,
    language,
    director,
    year,
    rating,
    }=req.body;
 
    const newMovie=new Movie({
         title,
    description,
    images,
    language,
    director,
    year,
    rating,
    });

 const savedMovie = await newMovie.save();

    res.status(201).json({
      message: "Movie created successfully",
      movie: savedMovie,
    });

  } catch (error) {
    console.error("Error saving movie:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

app.get('/movies',async(req,res)=>{
 try{
 const movies=await Movie.find();
 res.json(movies);
}
catch(e){
  res.json("error",e);
}
})

app.listen(PORT,()=>{
    
    console.log(`Server is running at port ${PORT}`)
    connectDB();
})
