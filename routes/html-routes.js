const db = require("../models");
const path = require("path");
const markets = require("../models/data/marketData.js"); // Get market JSON

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("index");
    });

    app.get("/explore", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/explore.html'));
    });

    app.get("/addfarmer", (req, res) => {
        res.render("addfarmer", {markets: markets.data});
    });
    //Query vendor
    app.get("/review", (req, res) => {
        //res.render("review")
        res.sendFile(path.join(__dirname, '../public/review.html'));
    });

    app.get("/market", (req, res) => {
        res.render("marketDetails");
    });

    app.get("/allfarmers", (req, res) => {
        res.render("allfarmers");
    });

    app.get("/farmer", (req, res) => {
        res.send("Worked /farmer");
    });
}