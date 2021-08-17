const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/registerUser", userController.registerUser);
// http://localhost:3001/api/user/listUser
router.get("/listUser/:name?", Auth, ValidateUser, userController.listUser);  //Necesario para validar el auth y el validar el jwt para saber si el usuario si puede listar y ver demas usuarios registrados

module.exports = router;