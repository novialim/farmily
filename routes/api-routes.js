/*
  Routes for /api path
 */
const express = require("express");
const router = express.Router();
const db = require("../models");  // db object for interfacing with SQL tables

/*
 Add a review by a user
 */
router.post("/api/review/add/:id", (req, res) => {

});

router.get("/api/review/add", (req, res) => {

});

// Route for /api/:id
router.put("/:id", (req, res) => {

});

module.exports = router;