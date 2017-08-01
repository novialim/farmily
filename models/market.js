module.exports = function(sequelize, DataTypes) {
    var market = sequelize.define("market", {
        // Giving the Author model a name of type STRING
        id: DataTypes.INTEGER,
        primaryKey: true,
        name: DataTypes.STRING,
        address:DataTypes.STRING,
        latititude:DataTypes.DECIMAL,
        latititude:DataTypes.DECIMAL,
        hours: DataTypes.INTEGER,
        url: DataTypes.STRING,
        contact: DataTypes.STRING


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