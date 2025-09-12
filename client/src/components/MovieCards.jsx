import React from 'react'
import MovieDetail from '../views/MovieDetail';
import {Link} from 'react-router'
function MovieCards({title,description,images,rating,id}) {
 const stars = Array(5).fill(0).map((_, i) => (
    <span key={i}>
      {i < rating ? "★" : "☆"}
    </span>
  ));
  return (
    <>
    <Link to={`/movie/${id}`}>
    <div className='cursor-pointer relative' >
      <img src={images}  className="w-[400px] h-[500px] object-cover rounded-2xl rounded-b-[0px]" />
      <p className='absolute top-2 right-2 text-white  text-2xl px-2 border-white border-1 bg-black rounded-4xl'>Horror</p>
    <h1 className='text-3xl'>{title}</h1>
   <h1><span className='text-[20px] font-bold'>rating:</span>{stars}</h1>
    </div>
    </Link>
    </>
  )
}

export default MovieCards;