const router = require('express').Router();

router.get('/api/comments/:id', getCommentAction);
router.post('/api/comments/add-comment', addCommentAction);
router.delete('/api/comments/delete-comment', deleteCommentAction);

module.exports = router;