const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION,
        logging: false,
    },
);

const Product = require("./Product");

Product.initModel(sequelize);

module.exports = {
    sequelize,
    Product,
};
