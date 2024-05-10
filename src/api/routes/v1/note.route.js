const express = require("express");
const router = express.Router();
const controller = require("../../controllers/note.controller");
const {
  validateNote,
  validateNoteParams,
} = require("../../validators/api.validator");

router.route("/create").post(validateNote, controller.create);
router.route("/edit").put(validateNote, controller.edit);
router.route("/delete/:noteId").delete(validateNoteParams, controller.delete);
router.route("/get/:noteId").get(validateNoteParams, controller.get);
router.route("/list").get(controller.list);

module.exports = router;
