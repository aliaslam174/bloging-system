

const usermodel=require('../models/Signupmodel')
const bcrypt = require("bcrypt");
const jwt   = require("jsonwebtoken");
const secretKey="23sf&%T23423sdfasfdaxcvaxfgsadfsdf#O#d"


const login= async(req,res)=>{
    const {email, password } = req.body;
    
    try {
        
        // confirm the user is registered or not with email
            const userExist = await usermodel.findOne({email: email});
            if(userExist === null) {
                return res.json({
                    status: "failed",
                    message: "Authentication failed"
                })
            }

        // confirm password
            const confirmPass = await bcrypt.compare(password, userExist.password);
            if(confirmPass === false) {
                return res.json({
                    status: "failed",
                    message: "Authentication failed"
                })
            }

        // generate token
        const token = jwt.sign( {id: userExist._id}, secretKey );

        // return response
        res.status(201).json({
            status: "success",
            message: "Logged in successfully",
             token: token
        })

    } catch (error) {
        
    }
}


const signup=async(req,res)=>{
    console.log(req.body)
    const {username,email,password}=req.body
try {
       // check is user already registered 
       const alreadyUser = await usermodel.findOne({ email: email});
       console.log(alreadyUser)

       if(alreadyUser !== null) {
           return res.status(200).json({
               status: "failed",
               message: "Email already registered"
           });
       }
         // password hashed
         const hashed = await bcrypt.hash(password, 10);
         console.log(hashed)
          // create user
        const newUser = await usermodel.create({
            username: username, email: email, password: hashed
        })

        // generate token?
        const token = jwt.sign( {id: newUser._id}, secretKey );
        console.log(token)
    

        // return response
        res.status(201).json({
            status: "success",
            message: "Registered successfully",
            token: token
        })


} catch (error) {
    
}
}


module.exports={
    login,signup
}