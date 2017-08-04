module.exports = function(sequelize, DataTypes) {
    var Produce = sequelize.define("Produce", {
        vendor_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        produce_item: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Produce.associate =  (models)=>{
        Produce.belongsTo(models.Vendor,{
            targetKey: "id"
        })

    }
    return Vendor;
};
