const db = require("../models");


function createVendor(data,cb){
    db.Vendor.create(data).then(()=>{
        cb({"result": "success"})
    },(error)=>{
        cb({"result":error})
    })
}

module.exports =  function(app){
    app.post("/api/addfarmer/", (req, res) => {
        console.log(req.body)
        createVendor(req.body,(result)=>{
            res.json(result)
        })
    });
}
