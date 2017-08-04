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
        MarketReview.belongsTo(models.Market,{
            targetKey: "market_id"
        })
        MarketReview.belongsTo(models.User,{
            targetKey: "user_id"
        })
        MarketReview.hasMany(models.Reviews,{
            targetKey: "review_id"
        })
     }
    return MarketReview;
};
