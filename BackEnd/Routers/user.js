const router = require("express").Router();
const { addUser, loginUser } = require("../Controller/user");

router.post("/addUser", addUser);
router.post("/login", loginUser);

module.exports = router;
