const mongoose=require('mongoose')
const schema = new mongoose.Schema({
    autherid:String,
    title:String,
    
    body:String,
    category:{
        type:String,
    },
    imageUrl:String,
    excerpt:String
   
   

},{timestamps:true});


const createpost = mongoose.model('post', schema);
module.exports=createpost