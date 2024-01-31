import mongoose from "mongoose";

const mediaclRecordSchema= new mongoose.Schema({},{timestamps:true})

export const MediaclRecord= mongoose.model("MedicalRecord",mediaclRecordSchema)