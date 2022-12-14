const { Sequelize } = require('sequelize');

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASS;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(database, username, password,{
    host: host,
    dialect: "mysql"
});

const dbConnectMySQL = async () => {
    try {
        await sequelize.authenticate();
        console.log("MySQL connected");
    } catch (error) {
        console.log("MySQL ERROR connected", error);
    }
};

module.exports = { sequelize, dbConnectMySQL };