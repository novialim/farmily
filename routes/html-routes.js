const db = require("../models");
const path = require("path");

module.exports = function (app) {
    app.get("/", (req, res) => {
            res.render("index")
    });

    app.get("/explore", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/explore.html'));
    });

    app.get("/addfarmer", (req, res) => {
        res.render("addfarmer")
    });
    //Query vendor
    app.get("/review", (req, res) => {
        //res.render("review")
        res.sendFile(path.join(__dirname, '../public/review.html'));
    });

    app.get("/market", (req, res) => {
        res.render("marketDetails")
    });
}