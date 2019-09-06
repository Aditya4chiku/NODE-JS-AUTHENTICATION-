const blogSchema=require('../model/blog.model')
exports.PostBlog=(req,res)=>{
let blog=new blogSchema({

    title:req.body.title,
    content:req.body.content
})

blog.save().then(createPost=>{
    res.status(200).json({
        message:'Blog Added SuccessFully',
        post:createPost,
        id:createPost._id
})
}).catch(err=>{
    res.status(401).json({
        error:err
    })
})
}