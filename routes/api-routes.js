const db = require("../models");

function createVendor(data, cb) {
    db.Vendor.create(data).then(()=>{
        cb({"result": "success"})
    },(error)=>{
        cb({"result":error})
    });
}

function showVendor(id, cb) {
    id ? obj = {vendor_id : id}: obj={};
    db.Vendor.findAll({
        include: [{
            model: db.Market,
            as: "Market"
        }],
        where:  obj
    }).then((result)=>{
        cb({result})
    },(error)=>{
        cb({"result":error});
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
    app.get("/api/market/:id?", (req, res) => {
        showVendor(req.params.id,(result)=>{
            res.json(result);
        });
    });
}
