const router = require('express').Router();
const postRoutes = require('./posts')
const commentsRoutes = require('./comments')

router.use('/posts', postRoutes);
router.use('/comments', commentsRoutes);
// router.use('/api/auth', authRoutes);

module.exports = router;