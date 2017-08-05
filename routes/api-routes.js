const db = require("../models");

module.exports =  function(app){
    /*
    farmer == vendor
     */
    app.post("/api/addfarmer/", (req, res) => {
        console.log(req.body)
        db.Vendor.create({
            vendor_name: req.body.farmer_name,
            vendor_contact:req.body.farmer_contact,
            vendor_text:req.body.farmer_description,
            market_id: req.body.farmer_group

        }).then((data)=>{
            console.log(data)
            res.json({"success":1})
        })
    });

}
