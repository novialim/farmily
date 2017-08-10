const db = require("../models");
const path = require("path");
const markets = require("../models/data/marketData.js"); // Get market JSON
const yelp = require('yelp-fusion');
const YELP_TOKEN = 'q9ldndMa5N13LwNksXrDhs4o7-SCPOC8el-mOaG_QjKTQfO5M5rdakH-XhcHzDMpF1D10Lefns2pRR_v_mX67BbTBwGzEiuMrYBfworQcTPzOuymFbbhlhuw8QwtWXYx';

// Initialize yelp client
const client = yelp.client(YELP_TOKEN);

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
        // res.sendFile(path.join(__dirname, '../public/writereview.html'));
        res.render("addreview");
    });

    app.get('/explore', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/explore.html'));
    });

    app.get('/farmer', function (req, res) {
        // res.sendFile(path.join(__dirname, '../public/farmer.html'));
        res.render("farmerDetails");
    });

    app.get("/addfarmer", (req, res) => {
        res.render("addfarmer", {markets: markets.data});
    });

    //Query vendor
    app.get("/review", (req, res) => {
        // res.render("review")
        res.sendFile(path.join(__dirname, '../public/review.html'));
    });

    app.get("/allfarmers", (req, res) => {
        //res.sendFile(path.join(__dirname, '../public/allfarmers.html'));
        res.render("allfarmers");
    });

    app.get("/contribute", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/contribute.html'));
    });

    // app.get("/farmer", (req, res) => {
    //     res.send("Worked /farmer");
    // });

    // Display market details page
    app.get("/market", (req, res) => {
        client.business(req.query.yelp_id).then(response => {
            console.log(JSON.stringify(response, null,2));
            let market = response.jsonBody;

            // Load placeholder photos if market has no Yelp photos
            let photos = market.photos;
            if (photos.length === 0){
                for (let i=1; i<=5; i++){
                    photos.push("https://lorempixel.com/300/300/food/"+i);
                }
            }

            // Pass data object to handlebars
            let data = {
                id: req.query.id,
                yelp_id: req.query.yelp_id,
                title: market.name,
                review_count: market.review_count,
                photos: photos
            }

            res.render("marketDetails", data);
        }).catch(e => {
            console.log(e);
        });
    });
}