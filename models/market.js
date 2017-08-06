module.exports = function (sequelize, DataTypes) {
    let Market = sequelize.define("Market", {
        market_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        market_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address_txt: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address_google: {
            type: DataTypes.STRING,
            allowNull: false
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: true
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: true
        },
        opening_day: {
            type: DataTypes.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'),
            allowNull: true
        },
        openingdaynumeric: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        openinghours: {
            type: DataTypes.STRING,
            allowNull: true
        },
        openinghours_extra: {
            type: DataTypes.STRING,
            allowNull: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: true
        },
        yelp_id: DataTypes.STRING
    }, {
        timestamps: false
    });

    Market.associate = (models) => {
        Market.hasMany(models.Review, {
            foreignKey: 'market_id'
        });
        Market.hasMany(models.Vendor, {
            foreignKey: 'market_id'
        });
    }
    return Market;
};