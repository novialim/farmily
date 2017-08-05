module.exports = function (sequelize, DataTypes) {
    let Vendor = sequelize.define("Vendor", {
        vendor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        vendor_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        market_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: false
    });

    Vendor.associate = (models) => {
        Vendor.hasMany(models.VendorReview, {
            foreignKey: 'vendor_id'
        });
        Vendor.belongsTo(models.Market, {
            foreignKey: 'market_id',
            targetKey: 'market_id'
        });
        Vendor.belongsTo(models.Produce, {
            foreignKey: 'produce_id'
        });
    }

    return Vendor;
};