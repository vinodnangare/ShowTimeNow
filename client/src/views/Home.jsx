import React from 'react'
import './../index.css';
import axios from 'axios';
import MovieCards from '../components/MovieCards.jsx';
import {useState,useEffect} from 'react';
import {Search} from 'lucide-react'

function Home() {

  
const [movie,setMovie]=useState([]);
const [search,setSearch]=useState('');

const fetchMovies=async ()=>{
  const response=await axios.get(`${import.meta.env.VITE_DB_URL}/movies`);
  setMovie(response.data.movies);

  console.log("Connected")
}


const handleSearch=async()=>{
  if(!search){
    fetchMovies()
    return;
  }

const searchRes=await axios.get(`${import.meta.env.VITE_DB_URL}/movies/searchByKeyword?q=${search}`);




setMovie(searchRes.data.data);

console.log(searchRes.data.data)

}

 useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch();
    }, 500); 

    return () => clearTimeout(delayDebounce);
  }, [search]);



  return (
    <>
  <h1 className='text-red-500 text-center text-5xl'>ShowTimeNow</h1>

  <div className='flex flex-row border-black border-2 w-fit px-5 rounded-full justify-center mx-auto mt-10 py-2'>
    <input type='text' placeholder='Search Movie...'  className='border-none outline-none ' onChange={(e)=>setSearch(e.target.value)}/>
    <Search className='cursor-pointer' onClick={handleSearch}/>
    {console.log(search)}
  </div>
    <div className='flex flex-row flex-wrap'>
    {
      movie && movie.length>0?(
      
      movie.map((m)=><div className='my-10 bg-amber-100 w-[400px] mx-10 h-[600px] flex flex-wrap  rounded-2xl border-2 border-black'> 
      
       <MovieCards title={m.title} 
       images={m.images}
       description={m.description}
      
       rating={m.rating} 
        id={m._id}
       />
      
      
      
      
      </div>
      ) ) :<h1 className='text-center text-4xl text-red-600 justify-center m-auto mt-20'>Movie Not Found 404</h1>
    }
    </div>
    </>

  )
}

export default Home