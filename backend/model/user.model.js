const mongoose=require('mongoose');
const uniqueValidaor=require('mongoose-unique-validator')

const userScheam= mongoose.Schema({
  email:{type:String,require:true,unique:true},
  password:{type:String,require:true,unique:true}
})

userScheam.plugin(uniqueValidaor);
module.exports=mongoose.model('user',userScheam,'USER');

