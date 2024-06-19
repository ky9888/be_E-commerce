import mongoose from "mongoose";
const hotelSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true,
       
    },   
    noteCity:{
        type:String,
        required:true,
       
    },   
    noteHotel:{
        type:String,
        required:true,
       
    },   
  
},{versionKey:false,timestamps:true})
const hotel = mongoose.model("hotel",hotelSchema)

export default hotel;