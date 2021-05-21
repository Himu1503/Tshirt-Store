import mongoose from 'mongoose';
const { Schema } = mongoose;
const {ObjectId} = mongoose.Schema

const productSchema = new Schema({
name: {
    type:String,
    trim:true,
    reuired:true,
    maxlenght:32
},

description :{
    type:String,
    trim:true,
    required:true,
    maxlenght:2000
},

price:{
    type:Number,
    trim:true,
    required:true,
    maxlenght:2000

},

category:{
    type : ObjectId,
    ref:"Category",
    required:true
},

stock:{
    type:Number,
    
},

sold:{
    type:Number,
    default:0
},

photo:{
    data: Buffer,
    contentType :String
}

},{timestamps:true});


module.exports=mongoose.model("Product" , productSchema)