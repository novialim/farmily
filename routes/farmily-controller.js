const express = require("express");
const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

router.get('/contribute', function(req, res) {
    res.sendFile(path.join(__dirname, './public/contribute.html'));
});

// Placeholder route for now
router.get('/farmer', function(req, res) {
    res.sendFile(path.join(__dirname, './public/farmer.html'));
});

router.get('/market', function(req, res) {
    res.sendFile(path.join(__dirname, './public/market.html'));
});

router.get('/form', function(req, res) {
    res.sendFile(path.join(__dirname, './public/testform.html'));
});

router.get('/review', function(req, res) {
    res.sendFile(path.join(__dirname, './public/review.html'));
});

router.get('/write', function(req, res) {
    res.sendFile(path.join(__dirname, './public/writereview.html'));
});

// Placeholder route for now
router.get('/shoppinglist', function(req, res) {
    res.sendFile(path.join(__dirname, './public/shoppinglist.html'));
});

module.exports = router;