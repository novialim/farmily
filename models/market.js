module.exports = function(sequelize, DataTypes) {
    var market = sequelize.define("markets", {
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
        address_google:{
            type: DataTypes.STRING,
            allowNull: false
        },
        latitude:{
            type: DataTypes.DECIMAL(20, 2),
            allowNull: true
        },
        longitude:{
            type: DataTypes.DECIMAL(20, 2),
            allowNull: true
        },
        opening_day:{
            type: DataTypes.ENUM('M','T','W','TH','F','SAT','SUN'),
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
        }
    });

    market.associate =  (models)=>{
        // market.hasMany(models.vendor,{
        //     foreignKey: "market_id"
        // })
        market.hasMany(models.marketReview,{
            foreignKey: "market_id"
        })
    }
    return market;
};
