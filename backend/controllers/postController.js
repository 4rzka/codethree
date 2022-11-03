const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')

// Get posts GET /api/posts
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
})

// Make a post POST /api/posts
const setPost = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400).json({ message: 'Please include a text' })
    }

    const post = await Post.create({
        text: req.body.text
    })

    res.status(200).json(post)
})


// Update post PUT /api/posts/:id
const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if(!post) {
        res.status(404).json({ message: 'Post not found' })
        throw new Error('Post not found')
    }
    
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })

    res.status(200).json(updatedPost)
})

// Delete post DELETE /api/posts/:id
const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if(!post) {
        res.status(404).json({ message: 'Post not found' })
        throw new Error('Post not found')
    }

    await post.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost

}