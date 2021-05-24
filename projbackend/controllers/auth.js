const User = require ("../modules/user")
exports.signup= (req,res)=> {

 const user = new User (req.body)
user.save((err,user)=>{

    if (err) {
        return res.status(404).json({
            err: "NOT able to save the user in DB "
        })
    }

res.json({
    name:user.name,
    email:user.email,
    id:user._id
})

})

}


exports.signout=  (req,res) =>{
    res.json({
        message: "User signout"
    })
  
  }