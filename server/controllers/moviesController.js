import Movie from '../model/Movies.js';
import express, { response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const postMovies=async (req,res)=>{
 
try{

 const {
  title,description,images,language,director,year,rating
 }=req.body;
if(!title || ! description || !images || ! language || !director || !year | !rating){
  return {
    "success":false,
    "message":"Fill all the Fields"
  };
};

 const newmovie=new Movie({
  title,description,images,language,director,year,rating
 });

 const savedmovie=await newmovie.save();

 res.status(201).json({
  success:true,
  movies:savedmovie
 });
}
catch(e){
  res.json({"error":"Error occured while posting film"});
}

};

const getMovies=async (req,res)=>{

  try{
    const size=await Movie.countDocuments();
    const movie=await Movie.find();
    res.json({
      total:size,
      success:true,
      "movies":movie,
       "data":"Movies fetched Successfully",
       
    });
  }
  catch(e){
    res.json({"data":"Error while fetching movies"});
  }
};


const putMovies=async(req,res)=>{
  const {id}=req.params;
  const {title ,description,images,language,director,year,rating}=req.body;
  const updateMovie={title ,description,images,language,director,year,rating};
  const updatedMovie=await Movie.updateOne({_id:id},updateMovie,{new:true});
  if(!updatedMovie){
    res.json({
      "success":false,
      "data":"Movie not find with that id"
    });
  }
  res.json({
    success:true,
    "movie":updateMovie,
    "data":"Movie Updated Successfully"
  });

};

const getSearch=async(req,res)=>{
  const{id}=req.params;
 try{
  
  const searchMovie=await Movie.findById(id);
  if(!searchMovie){
   return res.send("Movie cannot found");
  }
  res.json({
    success:true,
    "data":searchMovie
  })
}
catch(error){
  res.json({
    success:false,
    "data":`Movie Not found with this id ${id}`
  }
  )
}
};

const searchKeyword=async(req,res)=>{
 try{
  const keyword=req.query.q;
  
  const movies=await Movie.find({
    $or:[
      {title:{$regex:keyword ,$options:"i"}},
      {director:{$regex:keyword ,$options:"i"}}
      
    ]
  })

  res.json({
    success:true,
    data:movies
  })
 }
 catch(error){
  res.status(404).json({
    success:false,
    "data":"Cannot find Movie"
  })
 }

};


const patchMovie=async (req,res)=>{

  try{
  const {id}=req.params;
  const {title ,description,images,language,director,year,rating}=req.body;
 const updatingMovies={title ,description,images,language,director,year,rating};

  const patchedMovie=await Movie.findByIdAndUpdate(id,{$set:updatingMovies},{new:true});
  res.json({
    "data":patchedMovie
  })
  if(!patchedMovie){
    res.send("Movie cannot find");
  }
}
catch(error){
  res.json({
    success:false,
    message:"Upating failed"
  })  
}

};

const deleteMovie=async(req,res)=>{
try{
const {id}=req.params;


const deletedMovies=await Movie.findOneAndDelete({_id:id})

if(!deletedMovies){
 return res.status(404).send("Movie Not Sound");
}
else{
res.json({
  success:true,
  "data":"Deleted Successfully",

});
}
}
catch(error){
  res.status(500).json({
    "data":"Cannot found movie",
    
});
}

};

export {postMovies,getMovies,putMovies,getSearch,searchKeyword,patchMovie,deleteMovie};