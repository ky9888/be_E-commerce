import mongoose from "mongoose";
const flightSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true,
       
    },   
  
},{versionKey:false,timestamps:true})
const Flights = mongoose.model("Flights",flightSchema)

export default Flights;