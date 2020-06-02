const express = require('express');
const router = express.Router();
const path = require("path");

router.get("/stats", (req,res) => {
    res.sendFile(path.resolve(__dirname + "/../public/stats.html"));
});

router.get("/exercise", (req,res) => {
    res.sendFile(path.resolve(__dirname + "/../public/exercise.html"));
});

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;