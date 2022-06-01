const router = require('express').Router();
const getCommentAction = require('../action/comments/getcomments.action')
const addCommentAction = require('../action/comments/addcomments.action')
const deleteCommentAction = require('../action/comments/deletecomment.action')

router.get('/:id', getCommentAction);
router.post('/add-comment/:postId', addCommentAction);
router.delete('/delete-comment', deleteCommentAction);

module.exports = router;