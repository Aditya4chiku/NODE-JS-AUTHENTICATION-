const express=require('express');
const bodyParser=require('body-parser');
const  path=require('path');
const cors=require('cors')
const userRoute=require('../backend/routes/user.routes')
const blogRoute=require('../backend/routes/blog.route')
const app=express();
//app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader(
                'Access-Control-Allow-Headers',
               'Origin,X-Request-With, Content-Type,Accept'
               )
 res.setHeader(
     'Access-Control-Allow-Methods',
     'GET,POST,PATCH', 'DELETE', 'OPTIONS'
 );
 next()

})











//routing To user Rutes
app.use('/user',userRoute);
app.use('/user',blogRoute);

app.listen(3000,()=>console.log("Yes"))