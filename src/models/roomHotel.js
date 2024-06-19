import mongoose from "mongoose";
const roomHotelSchema = new mongoose.Schema({
   
    city:{
        type:String,
        required:true
    },
    nameHotel:{
        type:String,
        required:true
    },
    AddressHotel:{
        type:String,
        required:true,
       
    },   
    noteHotel:{
        type:String,
        required:true,
       
    },   
    photo:{
        type:String,
        
    },   
    Save:{
        type:String,
        required:true,
       
    },   
    priceSave:{
        type:String,
        required:true,
       
    },   
    price:{
        type:String,
        required:true,
       
    }  
  
},{versionKey:false,timestamps:true})
const roomHotel = mongoose.model("roomHotel",roomHotelSchema)

export default roomHotel;