const { addPost, getAllPost, getMyPosts, deletePost, addLilke, getOnePost, delLilke, addComment, updatePost, searchPost } = require("../Controller/community");

const router = require("express").Router();


router.post("/add", addPost);
router.get("/all", getAllPost);
router.post("/allmy", getMyPosts);
router.post("/del", deletePost);
router.post("/like", addLilke);
router.post("/delike", delLilke);
router.get("/one", getOnePost);
router.post("/addcomment", addComment);
router.post("/update", updatePost);
router.post("/search", searchPost);


module.exports = router;
