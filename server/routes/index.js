const router = require('express').Router();
const postRoutes = require('./posts')
const commentsRoutes = require('./comments')
const authRoutes = require('./auth')

router.use('/posts', postRoutes);
router.use('/comments', commentsRoutes);
router.use('/api', authRoutes);

module.exports = router;