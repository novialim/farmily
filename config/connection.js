// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(
    // "farmily",
    "farmily_db", //Novia: Temp database
    process.env.MYSQL_USER,
    process.env.MYSQL_PW, 
    {
        host: process.env.MYSQL_HOST,
        dialect: "mysql",
        timestamps: false,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

// Exports the connection for other files to use
module.exports = sequelize;