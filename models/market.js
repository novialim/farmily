module.exports = function(sequelize, DataTypes) {
    var market = sequelize.define("market", {
        // Giving the Author model a name of type STRING
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
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        latititude:{
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        opening_day: DataTypes.STRING,
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
//
// CREATE TABLE IF NOT EXISTS `mydb`.`market` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `name` VARCHAR(45) NOT NULL,
//     `address` VARCHAR(45) NOT NULL,
//     `latitude` DECIMAL(3,2) NOT NULL,
//     `longitude` DECIMAL(3,2) NOT NULL,
//     `hours` INT NOT NULL,
//     `url` VARCHAR(45) NOT NULL,
//     `contact` VARCHAR(45) NOT NULL,
//     PRIMARY KEY (`id`, `name`))
// ENGINE = InnoDB