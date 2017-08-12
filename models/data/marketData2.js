const db = require("../index");



module.exports.getAllMarket=(cb)=>{
    db.Market.findAll({
        order: [
            ["market_name", 'ASC'],
        ]
    }).then((result)=>{
        cb(result)
    })

}