const express = require('express');
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");

router.get("/stats", (req,res) => {
    res.sendFile(path.resolve(__dirname + "/../public/stats.html"));
});

router.get("/exercise", (req,res) => {
    res.sendFile(path.resolve(__dirname + "/../public/exercise.html"));
});

module.exports = router;