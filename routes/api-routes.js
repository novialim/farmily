const db = require("../models");

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
    let colName
    table === db.Market ?  colName = "market_name" :  colName = "vendor_name"
    id ? table === db.Market ? obj={market_id:id}: obj={vendor_id:id} : obj={};
    table.findAll({
        order: [
            [colName, 'ASC'],
        ],
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

// Show Review
function showReviews(id,cb){
    db.Review.findAll({
        where: { vendor_id : id }
    }).then((result)=>{
        cb({result})
    },(error)=>{
        cb({"result":error.toString()});
    });
}

module.exports = function (app) {
    // Add vendor
    app.post("/api/addfarmer/", (req, res) => {
        insertData(req.body,db.Vendor,(result)=>{
            res.redirect("/farmer?id="+result);
        });
    });

    app.post("/api/reviewfarmer/", (req, res) => {
        insertData(req.body,db.Review,(result)=>{
            res.redirect("/farmer?id="+req.body.vendor_id);
        });

    });

    // View reviews
    app.get("/api/viewreview/:id", (req, res) => {
        showReviews(req.params.id,(result)=>{
            res.json(result)
        })

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

    // Redirect here to show 400 status
    app.get('/400', (req, res) => {
        res.status(400).render('400', {title: "400: Bad Request"});
    });

    // Send a 404 page or Status
    app.get('*', (req, res) => {
        res.status(404).render("404", {title: "404: Not Found"});
    });
}