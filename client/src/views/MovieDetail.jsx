
import React from 'react'
import './../index.css';
import axios from 'axios';
import MovieCards from '../components/MovieCards.jsx';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router';



function MovieDetail() {
 const {id} =useParams();
const [movie,setMovie]=useState('');


const fetchMovies=async ()=>{
  const response=await axios.get(`${import.meta.env.VITE_DB_URL}/movies/search/${id}`);
  console.log(response.data.data)
  setMovie(response.data.data);
  console.log("Connected")
}
useEffect(()=>{
  fetchMovies();
},[id]);

  return (
    <>
  <h1 className='text-red-500 text-center text-5xl'>{movie.title}</h1>
    <div className='flex flex-row flex-wrap justify-center'>
  
      
        <div className='flex flex-col items-center w-[600px] bg-pink-100 p-8 border-2 rounded-[20px]'>
        <img src={movie.images} className='h-[400px] items-center content-center px-auto'/>
        <h1 className='font-bold text-3xl'>{movie.title}</h1>
        <h1><span className='font-bold'>Director:</span>{movie.director}</h1>
        <h1><span className='font-bold text-[17px] text-gray-500'>Rating:</span>{movie.rating}</h1>
        <h1>{movie.description}</h1>
        </div>
      
      
      
      
      
    </div>
    </>

  )
}

export default MovieDetail


