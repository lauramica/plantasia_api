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

const Type = require("./Type");
const Category = require("./Category");
const Product = require("./Product");
const Admin = require("./Admin");
const Customer = require("./Customer");
const Order = require("./Order");

Product.initModel(sequelize);

module.exports = {
    sequelize,
    Type,
    Category,
    Product,
    Admin,
    Customer,
    Order,
};
