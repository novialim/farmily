module.exports = {
    "development": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PW,
        "database": "farmily_db",
        "host": "localhost",
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL"
    }
}