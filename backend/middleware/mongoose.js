const mongoose=require('mongoose');
const url="mongodb://localhost:27017/AUTH";
mongoose.connect(url,(err)=>{
if(err)
{
    console.log(err)
}
else
console.log('Connected To Db')
})

module.exports=mongoose