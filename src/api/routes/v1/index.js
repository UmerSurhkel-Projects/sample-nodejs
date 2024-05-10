const express = require("express");
const router = express.Router();
const noteRoutes = require("./note.route");
const userRoutes = require("./user.route");

/**
 * v1/
 */
router.use("/note", noteRoutes);
router.use("/user", userRoutes);

module.exports = router;
