/*
   Only reviews for the farmer / vendor
 */


module.exports = function (sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        review_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        review_text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: false
    });

    Review.associate = (models) => {
        Review.belongsTo(models.Vendor, {
            foreignKey: 'vendor_id',
            targetKey: 'vendor_id'
        });
        Review.belongsTo(models.User, {
            foreignKey: 'user_id',
            targetKey: 'user_id'
        })
    }
    return Review;
};