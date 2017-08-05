module.exports = function (sequelize, DataTypes) {
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
        market_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    MarketReview.associate = (models) => {
        MarketReview.belongsTo(models.Market, {
            foreignKey: 'market_id',
            targetKey: 'market_id'
        });
        MarketReview.belongsTo(models.User, {
            foreignKey: 'user_id',
            targetKey: 'user_id'
        });
        MarketReview.hasMany(models.Review, {
            foreignKey: 'marketReview_id'
        });
    }
    return MarketReview;
};