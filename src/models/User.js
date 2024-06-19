import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"member"
    }
},{versionKey:false,timestamps:true})
export default mongoose.model("User",userSchema)