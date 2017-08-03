module.exports = function(sequelize, DataTypes) {
    var market = sequelize.define("markets", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
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
        latititude:{
            type: DataTypes.DECIMAL(2, 20),
            allowNull: true
        },
        latititude:{
            type: DataTypes.DECIMAL(2, 20),
            allowNull: true
        },
        opening_day:{
            type: DataTypes.ENUM('M','T','W','TH','F','SAT','SUN'),
            allowNull: true
        },
        open_hour: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        close_hour: {
            type: DataTypes.INTEGER,
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

    return market;
};
