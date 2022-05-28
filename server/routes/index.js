const router = require('express').Router();
const postRoutes = require('./posts')

router.use('/posts', postRoutes);
// router.use('/api/comments', commentsRoutes);
// router.use('/api/auth', authRoutes);

module.exports = router;