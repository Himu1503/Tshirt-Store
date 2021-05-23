var express = require ('express')
var app = express()

const port = 3000 

app.get('/login', (req,res) => (res.send ('Your are visiting the log in page')))



const admin = (req,res ) => {
    return res.send("Admin Dashboad")
}


const isLogedin = (req,res,next)=>{
    console.log("is admin logedd in ")
    next()

}

app.get('/admin' ,isLogedin ,admin)

app.listen(port , ()=> (console.log('Server up and running....')))