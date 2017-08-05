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

    });

    Vendor.associate = (models) => {
        Vendor.hasMany(models.VendorReview);
        Vendor.belongsTo(models.Market);
        Vendor.belongsTo(models.Produce);
    }

    return Vendor;
};