import Movie from '../model/Movies.js';
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const postMovies=async (req,res)=>{
 
try{

 const {
  title,description,images,language,director,year,rating
 }=req.body;


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
    const movie=await Movie.find();
    res.json({
      success:true,
      "movies":movie,
       "data":"Movies fetched Successfully"
    });
  }
  catch(e){
    res.json({"data":"Error while fetching movies"});
  }
};


export {postMovies,getMovies};