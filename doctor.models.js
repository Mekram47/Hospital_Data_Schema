import mongoose from "mongoose";

const doctorSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    qualifiaction:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    experienceInyears:{
        type: Number,
        default:0
    },
    workInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
    ]
   
},{timestamps:true})

export const Doctor= mongoose.model("Doctor",doctorSchema)