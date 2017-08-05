// Dependencies
// =============================================================
const path = require("path");
const url = require('url');
const scrollAnchor = require("../public/js/scrollAnchor.js");
const express = require("express");
const router = express.Router();
const multer = require('multer');

var uploading = multer({
  dest: '../public/uploads/',
  limits: {fileSize: 1000000, files:1},
});


// router.post('/upload', uploading, function(req,res){

// });

// Home page
// router.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// About us
router.get('/aboutus', function (req, res) {
    // res.sendFile(path.join(__dirname, '../public/index.html'));
    res.redirect("https://farmily.herokuapp.com/index.html#aboutus");
});

router.get('/contribute', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/contribute.html'));
});

// Placeholder route for now
router.get('/farmer', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/farmer.html'));
});

// router.get('/market', function (req, res) {
//     res.sendFile(path.join(__dirname, '../public/market.html'));
// });

router.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/testform.html'));
});

router.get('/review', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/review.html'));
});

router.get('/write', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/writereview.html'));
});

router.get('/allfarmers', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/allfarmers.html'));
});

router.get('/addfarmer', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/addfarmer.html'));
});

router.get('/explore', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/explore.html'));
});

// Test page - market page with Handlebars
router.get('/test', function (req, res) {
    // Test market object
    let testMarket = {
        market_name: "Downtown El Cajon Certified Farmers' Market",
        address_google: "190 E Main St, El Cajon, CA 92020",
        contact: "(619) 641-7510 x 277"
    }

    res.render('marketDetails', testMarket);
});

// router.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

module.exports = router;