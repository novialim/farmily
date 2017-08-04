module.exports = function(sequelize, DataTypes) {
    var Reviews = sequelize.define("Reviews", {
        review_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        vendor_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    Reviews.associate =  (models)=>{
        Reviews.belongsTo(models.MarketReview,{
            targetKey: "review_id"
        })
        Reviews.belongsTo(models.VendorReview,{
            targetKey: "review_id"
        })
    }
    return Reviews;
};
