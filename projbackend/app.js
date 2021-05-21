
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE,
 {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
 .then(()=> {
     console.log ("DB connected")
 }).catch((err)=> {
     console.log("Error Connecting to DB")
 })


const express = require ("express")
const app= express()

const port = process.env.PORT || 7000 

app.listen (()=>{
    console.log (`App is running at ${port}`)
})