import mongoose from "mongoose";
import {model,Schema} from 'mongoose';

const movieSchema=new Schema({

    title: { type: String ,require:true},
  description: { type: String ,require:true },
  images: { type: [String], require:true },
  language: { type: String },
  director: { type: String },
  year: { type: Number },
  rating: { type: Number },
},
 {timestamps:true},
);

const Movie=model("Movie",movieSchema);

export default Movie;