const router = require('express').Router();
const getPostsAction = require('../action/posts/getposts.action')
const getPostAction = require('../action/posts/getpost.action')
const addPostAction = require('../action/posts/addpost.action')
const updatePostAction = require('../action/posts/updatepost.action')
const deletePostAction = require('../action/posts/deletepost.action')

router.get('/', getPostsAction);
router.get('/:id', getPostAction);
router.post('/add-post', addPostAction);
router.put('/update-post/:id', updatePostAction);
router.delete('/delete-post/:id', deletePostAction);

module.exports = router;