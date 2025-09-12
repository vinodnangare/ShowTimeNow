import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { postMovies , getMovies ,putMovies,getSearch,searchKeyword,patchMovie ,deleteMovie} from './controllers/moviesController.js';
import Movie from './model/Movies.js';

dotenv.config({path:"../.env"});
const app=express();
app.use(express.json());

app.use(cors());
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

app.post('/movies',postMovies);

app.get('/movies',getMovies);

app.put("/movies/:id",putMovies);

app.get('/movies/search/:id',getSearch);

app.get('/movies/searchByKeyword',searchKeyword);

app.patch('/movies/:id',patchMovie);

app.delete('/movies/delete/:id',deleteMovie);

app.listen(PORT,()=>{
    
    console.log(`Server is running at port ${PORT}`)
    connectDB();
})
