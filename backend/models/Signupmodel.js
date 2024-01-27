const mongoose=require('mongoose')
const schema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    isadmin:{
        type:Boolean,
        default:false
    },
   

},{timestamps:true});


const UserModel = mongoose.model('user', schema);
module.exports=UserModel