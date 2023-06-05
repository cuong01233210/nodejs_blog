const express = require("express");
const { show, index } = require("../app/controllers/NewsController");

const router = express.Router();

router.use("/:slug", show);
router.use("/", index);

module.exports = router;
