const express = require("express");
const router = express.Router();

const { analyzeCode } = require("../controllers/analysisController");
const { auth } = require("../middleware/authMiddleware");

router.post("/analyze", auth, analyzeCode);

module.exports = router;