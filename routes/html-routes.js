var db = require("../models")

module.exports =  function(app) {
    app.get("/", (req, res) => {
            res.render("index")
    }),
    app.get("/explore", (req, res) => {
            res.render("marketDetails")
    })
}


