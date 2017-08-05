module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define("User", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    User.associate = (models) => {
        User.hasMany(models.MarketReview);
        User.hasMany(models.VendorReview);
    }
    return User;
};