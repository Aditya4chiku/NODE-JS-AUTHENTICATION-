const express=require('express');
const blogPost=require('../controllers/blog.controller')
const router=express.Router();
const checkAuth=require('../middleware/check-auth')
router.post('/postBlog',checkAuth,blogPost.PostBlog);
module.exports=router;