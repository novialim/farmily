// Dependencies
// =============================================================
var path = require("path");
var url = require('url');

const express = require("express");
const router = express.Router();

var scrollAnchor = require("../public/js/scrollAnchor.js");

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


router.get('/aboutus', function(req, res) {
    // res.sendFile(path.join(__dirname, '../public/index.html'));
    res.redirect("https://farmily.herokuapp.com/index.html#aboutus");
});

router.get('/contribute', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/contribute.html'));
});

// Placeholder route for now
router.get('/farmer', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/farmer.html'));
});

router.get('/market', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/market.html'));
});

router.get('/form', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/testform.html'));
});

router.get('/review', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/review.html'));
});

router.get('/write', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/writereview.html'));
});

router.get('/allfarmers', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/allfarmers.html'));
});

router.get('/addfarmer', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/addfarmer.html'));
});


// router.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

module.exports = router;