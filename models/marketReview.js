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

    // marketReview.associate =  (models)=>{
    //     marketReview.belongsTo(models.market,{
    //         targetKey: "market_id"
    //     })
    //     marketReview.belongsTo(models.user,{
    //         targetKey: "id"
    //     })
    //     marketReview.hasMany(models.reviews,{
    //         targetKey: "id"
    //     })
    // }
    return MarketReview;
};
