const express = require("express");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");
const { loginController, registerController } = require("../controllers/auth");

router.post("/login", validatorLogin, loginController);

router.post("/register", validatorRegister, registerController);

module.exports = router;
