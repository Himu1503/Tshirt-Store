import mongoose from 'mongoose';
const { Schema } = mongoose;
import { createHmac } from 'crypto'
const { v4: uuidv4 } = require('uuid')

const userSchema = new Schema({
    name:{
        type:String,
        trim:true,
        maxlength:32,
        required:true
    },

    lastname:{
        type:String,
        maxlength:32,
        trim:true

    },

    email:{
        type:String,
        trim:true,
        required:true,
        unique:true


    },

    userinfo:{
        type:String,
        trim:true

    },

    encry_password:{
        type:String,
        required:true

    },

salt:String,

role:{
    type:Number,
    default:0
},

purchases:{
    type: Array,
    default: []
},


},{timestamps:true});

userSchema.virtual("password")

   .set(function(password) {
       this._password=password
       this.salt= uuidv4()
       this.encry_password=secureFunction(password)
   })
   .get(function() {
       return this.password
   })


userSchema.method ={



    authenticate: function (password) {
        return this.secureFunction(plainpassword)=== this.encry_password

    },

    secureFunction: function (plainpassword) {
     if (!password) return ""
     try {

          return createHmac('sha256', this.salt)
               .update(plainpassword)
               .digest('hex')
         
     } catch (err) {
         return ""
         
     }


    }
}

module.exports = mongoose.model("User",userSchema)