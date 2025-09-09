import mongoose from "mongoose";
import {model,Schema} from 'mongoose';

const movieSchema=new Schema({

    title: { type: String },
  description: { type: String },
  images: { type: [String] },
  language: { type: String },
  director: { type: String },
  year: { type: Number },
  rating: { type: Number },
});

const Movie=model("Movie",movieSchema);

export default Movie;