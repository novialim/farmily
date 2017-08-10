const db = require("../models");

// Insert a new vendor
// function createVendor(data, cb) {
//     db.Vendor.create(data).then(()=>{
//         cb({"result": "success"})
//     },(error)=>{
//         cb({"result":error})
//     });
// }

// Insert a new vendor
function insertData(data,table, cb) {
    table.create(data).then((res)=>{
        cb(res.vendor_id)
    },(error)=>{
        cb({"result":error})
    });
}

// Display Farmer or Market with their respective association
function show_Market_Vendor_data(id,table,model,cb){
    id ? table === db.Market ? obj={market_id:id}: obj={vendor_id:id} : obj={};
    table.findAll({
        include: [{
            model: model
        }],
        where:obj
    }).then((result)=>{
        cb({result});
    },(error)=>{2
    
        cb({"result":error.toString()});
    });
}

module.exports = function (app) {
    // Add vendor
    app.post("/api/addfarmer/", (req, res) => {
        console.log(req.body)
        insertData(req.body,db.Vendor,(result)=>{
            res.redirect("/farmer?id="+result);
        });
    });

  app.post("/api/reviewfarmer/", (req, res) => {
        console.log(req.body)
        insertData(req.body,db.Review,(result)=>{
            res.redirect("/farmer?id="+req.body.vendor_id);
        });

    });

    // View vendor details
    app.get("/api/viewfarmer/:id?", (req, res) => {
        show_Market_Vendor_data(req.params.id,db.Vendor,db.Market,(result)=>{
            res.json(result);
        });
    });

    // View market details
    app.get("/api/viewmarket/:id?", (req, res) => {
        show_Market_Vendor_data(req.params.id,db.Market,db.Vendor,(result)=>{
            res.json(result);
        });
    });

    // Send a 404 page or Status
    app.get('*', (req,res)=>{
        res.status(404);
        res.render("404");
    });
}