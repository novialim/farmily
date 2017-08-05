module.exports = function(sequelize, DataTypes) {
    var MarketReview = sequelize.define("MarketReview", {
        id: {
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
        market_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    MarketReview.associate =  (models)=>{
        MarketReview.belongsTo(models.Market);
        MarketReview.belongsTo(models.User);
        MarketReview.hasMany(models.Review);
     }
    return MarketReview;
};
