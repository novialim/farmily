/*
  Routes for /api path
 */
const express = require("express");
const router = express.Router();
const db = require("../models");  // db object for interfacing with SQL tables

// Route for /api/add
router.post("/add", (req, res) => {

});

// Route for /api/:id
router.put("/:id", (req, res) => {

});

module.exports = router;