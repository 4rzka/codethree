const asyncHandler = require('express-async-handler')

// Get posts GET /api/posts
const getPosts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get posts' })
})

// Make a post POST /api/posts
const setPost = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400).json({ message: 'Please include a text' })
    } else {
        res.status(200).json({ message: 'Post created' })       
}
})

// Update post PUT /api/posts/:id
const updatePost = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update post ${req.params.id}` })
})

// Delete post DELETE /api/posts/:id
const deletePost = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete post ${req.params.id}` })
})

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost

}