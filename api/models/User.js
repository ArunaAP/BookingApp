import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    username:{
        type: String ,
        required : true
    },
    email:{
        type: String ,
        required : true
    },
    password:{
        type: String ,
        required : true
    },
    isadmin:{
        type: Boolean ,
        default: false,
    
    },

},{timestamps:true});

export default mongoose.model("User" , userSchema)