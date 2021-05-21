var express = require ('express')
var app = express()

const port = 3000 

app.get('/login', (req,res) => (res.send ('Your are visiting the log in page')))

app.listen(port , ()=> (console.log('Server up and running....')))