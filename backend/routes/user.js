const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/registerUser", userController.registerUser);
// http://localhost:3001/api/user/listUser
router.get("/listUser/:name?", userController.listUser);

module.exports = router;