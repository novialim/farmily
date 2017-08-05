const db = require("../models");
const path = require("path");

module.exports = function (app) {
    app.get("/", (req, res) => {
            res.render("index")
    });
  
    // app.get("/explore", (req, res) => {
    //         res.render("explore")
    // })
      
//     app.get("/explore-html", (req, res) => {
//         res.sendFile(path.join(__dirname, '../public/explore.html'));
//     });

    app.get("/market", (req, res) => {
        res.render("marketDetails")
    });
}