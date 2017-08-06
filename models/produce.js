module.exports = function (sequelize, DataTypes) {
    var Produce = sequelize.define("Produce", {
        vendor_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        item: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Produce.associate = (models) => {
        Produce.belongsToMany(models.Vendor, {
            through: 'VendorProduce',
            foreignKey: 'produce_id'
        });
    }
    return Produce;
};