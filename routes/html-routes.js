const db = require("../models");
const path = require("path");
const markets = require("../models/data/marketData.js"); // Get market JSON

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("index");
    });

    // About us
    app.get('/aboutus', function (req, res) {
        // res.sendFile(path.join(__dirname, '../public/index.html'));
        res.redirect("https://farmily.herokuapp.com/index.html#aboutus");
    });

    app.get('/contribute', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/contribute.html'));
    });

    app.get('/form', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/testform.html'));
    });

    app.get('/write', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/writereview.html'));
    });


    app.get('/explore', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/explore.html'));
    });

    app.get('/farmer', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/farmer.html'));
    });

    app.get("/explore", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/explore.html'));
    });

    app.get("/addfarmer", (req, res) => {
        res.render("addfarmer", {markets: markets.data});
    });

    //Query vendor
    app.get("/review", (req, res) => {
       // res.render("review")
        res.sendFile(path.join(__dirname, '../public/review.html'));
    });

    app.get("/market/:id", (req, res) => {
        res.render("marketDetails");
    });

    app.get("/allfarmers", (req, res) => {
        //res.sendFile(path.join(__dirname, '../public/allfarmers.html'));
        res.render("allfarmers");
    });

    app.get("/contribute", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/contribute.html'));
    });


    app.get("/farmer", (req, res) => {
        res.send("Worked /farmer");
    });
}