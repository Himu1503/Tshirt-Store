var express = require('express')
var router = express.Router()
const { check } = require('express-validator')
const {signout,signup,signin} = require("../controllers/auth")

//Singup route with check method express validator 

router.post ("/signup" ,[

    check ("name").isLength({min: 3}).withMessage('Name must be at least 3 chars long'),
    check ("email").isEmail(),
    check("passowrd").isLength({min: 3}).withMessage('Password must be at least 5 chars long')

],signup )




router.get("/signout",signout)



module.exports = router;


router.post ("/signin" ,
[

    check ("email").isEmail(),
    check("passowrd").isLength({min: 3}).withMessage('Password field is required')

],signin )
