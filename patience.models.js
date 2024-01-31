import mongoose from "mongoose";

const patienceSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["M","F","O"]
    },
    address:{
        type:String,
        required:true
    },
    diagonosedWith:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
},{timestamps:true})

export const Patience= mongoose.model("Patience",patienceSchema)