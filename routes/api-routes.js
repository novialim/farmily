const db = require("../models");

// Insert a new vendor
function createVendor(data, cb) {
    db.Vendor.create(data).then(()=>{
        cb({"result": "success"})
    },(error)=>{
        cb({"result":error})
    });
}

// Display vendor and its associated market
function showVendor(id, cb) {
    id ? obj = {vendor_id:id}: obj={};
    db.Vendor.findAll({
        include: [{
            model: db.Market
        }],
        where:obj
    }).then((result)=>{
        cb({result});
    },(error)=>{
        cb({"result":error.toString()});
    });
}

// Display market and its associated vendors
function showMarket(id, cb) {
    id ? obj = {market_id:id}: obj={};
    db.Market.findAll({
        include: [{
            model: db.Vendor
        }],
        where:obj
    }).then((result)=>{
        cb({result});
    },(error)=>{
        cb({"result":error.toString()});
    });
}

module.exports = function (app) {
    // Add vendor
    app.post("/api/addfarmer/", (req, res) => {
        createVendor(req.body,(result)=>{
            res.json(result);
        });
    });

    // View vendor details
    app.get("/api/viewfarmer/:id?", (req, res) => {
        showVendor(req.params.id,(result)=>{
            res.json(result);
        });
    });

    // View market details
    app.get("/api/viewmarket/:id?", (req, res) => {
        showMarket(req.params.id,(result)=>{
            res.json(result);
        });
    });
}
