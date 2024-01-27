const mongoose=require('mongoose')
const schema = new mongoose.Schema({
   name: String

},{timestamps:true});


const category = mongoose.model('category', schema);
module.exports=category