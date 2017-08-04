module.exports = function(sequelize, DataTypes) {
    var VendorReview = sequelize.define("VendorReview", {
        vendor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        review_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        vendor_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    VendorReview.associate =  (models)=>{
        VendorReview.belongsTo(models.Vendor,{
            targetKey: "vendor_id"
        })
        VendorReview.belongsTo(models.User,{
            targetKey: "user_id"
        })
    }
    return VendorReview;
};
