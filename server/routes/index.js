const router = require("express").Router();
const postRoutes = require("./posts");
const commentsRoutes = require("./comments");
const authRoutes = require("./auth");

router.use("/api/posts", postRoutes);
router.use("/api/comments", commentsRoutes);
router.use("/api", authRoutes);

module.exports = router;
