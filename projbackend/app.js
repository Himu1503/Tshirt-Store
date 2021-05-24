
// require('dotenv').config()
const mongoose = require('mongoose');

var express = require ("express")
 app= express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const authRoutes = require("./routes/auth")

const port = 8000
// This is my DB Connection 
mongoose.connect('mongodb://localhost:27017/tshirt',
 {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
 .then(()=> {
     console.log ("DB connected")
 }).catch((err)=> {
     console.log("Error Connecting to DB")
 })
//This is my Middleware 
 app.use(bodyParser.json())
 app.use(cookieParser())
 app.use(cors())

// My Routes  

app.use ("/api" , authRoutes)

app.listen(port , ()=> (console.log('Server up and running....')))