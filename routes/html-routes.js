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

    app.get("/market", (req, res) => {
        res.render("marketDetails");
    });
}