import mongoose from "mongoose";
import {model,Schema} from "mongoose" ;

const MovieSchema =new Schema({
    "title":{type:String},
    "description":{type:String},
    "images":{type:[String]},
    "language":{type:String},
    "director":{type:String},
    "year":{type:Number},
    "rating":{type:Number},
});


const Movie=model("Movie",MovieSchema);




export default Movie;