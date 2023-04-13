const express = require("express");

const router = express.Router();
const sneakerController = require("../controller/sneakerController");

router.post("/category", sneakerController.insertCategory);
router.get("/", sneakerController.getSneakers);
// router.get("/:id", sneakerController.getSneaker);

module.exports = router;
