module.exports = function(sequelize, DataTypes) {
    var Vendor = sequelize.define("Vendor", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        vendor_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vendor_review_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        market_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Vendor.associate =  (models)=>{
        Vendor.belongsTo(models.Market,{
            targetKey: "market_id"
        })

    }
    return Vendor;
};
