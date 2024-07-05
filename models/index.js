const { Sequelize } = require("sequelize");

const sequelizeOptions = {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
};

if (process.env.DB_CONNECTION === "postgres") {
    sequelizeOptions.dialectModule = require("pg");
}

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    sequelizeOptions,
);

const Product = require("./Product");

Product.initModel(sequelize);

module.exports = {
    sequelize,
    Product,
};
