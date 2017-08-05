module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
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

    Review.associate =  (models)=>{
        Review.belongsTo(models.MarketReview);
        Review.belongsTo(models.VendorReview);
    }
    return Review;
};
