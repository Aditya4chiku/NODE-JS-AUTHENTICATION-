const mongoose=require('mongoose');
const blogSchema=mongoose.Schema({
    title:{type:String,require:true},
    content:{type:String,require:true},
})
module.exports=mongoose.model('blog',blogSchema,'BLOG')