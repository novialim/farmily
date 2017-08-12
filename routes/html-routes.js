const db = require("../models");
const path = require("path");
//const markets = require("../models/data/marketData.js"); // Get market JSON
const markets2 = require("../models/data/marketData2");
const yelpData = require("./yelpUtility")

module.exports = function (app) {
    // Home page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // About us
    app.get('/aboutus', function (req, res) {
        // res.sendFile(path.join(__dirname, '../public/index.html'));
        res.redirect("https://farmily.herokuapp.com/index.html#aboutus");
    });

    app.get('/contribute', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/contribute.html'));
    });

    // Add a review
    app.get('/write', function (req, res) {
        // res.sendFile(path.join(__dirname, '../public/writereview.html'));
        res.render("addreview", {title: 'Add a Review'});
    });

    // View map of markets
    app.get('/explore', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/explore.html'));
    });

    // View vendor details
    app.get('/farmer', function (req, res) {
        // res.sendFile(path.join(__dirname, '../public/farmer.html'));
        res.render("farmerDetails");
    });

    // Add a new vendor
    app.get("/addfarmer", (req, res) => {
        let arr=[]
        markets2.getAllMarket((result)=>{
            result.forEach((market)=>{
                arr.push({
                    "id": market.market_id,
                    "market_name": market.market_name
                })
            })
            console.log(arr)
            res.render("addfarmer", {
                title: 'Add a Farmer',
                markets: arr
            });
        })
        // res.render("addfarmer", {markets: markets.data});
    });

    // Query vendor
    app.get("/review", (req, res) => {
        // res.render("review")
        res.sendFile(path.join(__dirname, '../public/review.html'));
    });

    // View all vendors
    app.get("/allfarmers", (req, res) => {
        //res.sendFile(path.join(__dirname, '../public/allfarmers.html'));
        res.render("allfarmers", {title: 'Farmers'});
    });

    // Display market details page
    app.get("/market", (req, res) => {
        // Check if request valid
        if (req.query.id===undefined || req.query.yelp_id===undefined){
            res.redirect('/400');
        } else {
            yelpData.getYelpData(req.query.yelp_id, req.query.id ,(result)=>{
                res.render("marketDetails", result);
            })
        }
    });
}