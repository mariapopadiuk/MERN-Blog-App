const router = require("express").Router();
const getPostsAction = require("../action/posts/getposts.action");
const getPostAction = require("../action/posts/getpost.action");
const addPostAction = require("../action/posts/addpost.action");
const updatePostAction = require("../action/posts/updatepost.action");
const deletePostAction = require("../action/posts/deletepost.action");
const authenticateJWT = require("../security/index");

router.get("/", getPostsAction);
router.get("/:id", getPostAction);
router.post("/add-post", authenticateJWT, addPostAction);
router.patch("/update-post/:id", authenticateJWT, updatePostAction);
router.delete("/delete-post/:id", authenticateJWT, deletePostAction);

module.exports = router;
