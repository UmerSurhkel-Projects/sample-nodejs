const express = require("express");
const router = express.Router();
const controller = require("../../controllers/user.controller");
const { validateUser } = require("../../validators/api.validator");

router.route("/register").post(validateUser, controller.register);
router.route("/login").post(validateUser, controller.login);

module.exports = router;
