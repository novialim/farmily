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
        vendor_contact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vendor_text: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        market_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: false
    });

    Vendor.associate = (models) => {
        Vendor.hasMany(models.Review, {
            foreignKey: 'vendor_id'
        });
        Vendor.belongsTo(models.Market, {
            foreignKey: 'market_id',
            targetKey: 'market_id'
        });
        Vendor.belongsToMany(models.Produce, {
            through: 'VendorProduce',
            foreignKey: 'vendor_id'
        });
    }

    return Vendor;
};