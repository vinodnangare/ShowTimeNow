import React from 'react'
import './../index.css';
import axios from 'axios';
import MovieCards from '../components/MovieCards.jsx';
import {useState,useEffect} from 'react';


function Home() {

  
const [movie,setMovie]=useState([]);


const fetchMovies=async ()=>{
  const response=await axios.get(`${import.meta.env.VITE_DB_URL}/movies`);
  setMovie(response.data.movies);
  console.log(response.data.movies)
  console.log("Connected")
}
useEffect(()=>{
  fetchMovies();
},[]);

  return (
    <>
  <h1 className='text-red-500 text-center text-5xl'>ShowTimeNow</h1>
    <div className='flex flex-row flex-wrap'>
    {
      
      movie.map((m)=><div className='my-10 bg-amber-100 w-[400px] mx-10 h-[600px] flex flex-wrap  rounded-2xl border-2 border-black'> 
      
       <MovieCards title={m.title} 
       images={m.images}
       description={m.description}
      
       rating={m.rating} 
        id={m._id}
       />
      
      
      
      
      </div>
      )
    }
    </div>
    </>

  )
}

export default Home