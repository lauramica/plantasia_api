const { Sequelize } = require("sequelize");

const sequelizeOptions = {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
};

if (process.env.DB_CONNECTION === "postgres") sequelizeOptions.dialectModule = require("pg");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    sequelizeOptions,
);

const Type = require("./Type");
const Product = require("./Product");
const Admin = require("./Admin");
const Customer = require("./Customer");
const Order = require("./Order");

Type.initModel(sequelize);
Product.initModel(sequelize);
Admin.initModel(sequelize);
Customer.initModel(sequelize);
Order.initModel(sequelize);

Type.hasMany(Product);
Product.belongsTo(Type);
Order.belongsTo(Customer);
Customer.hasMany(Order);

module.exports = {
    sequelize,
    Type,
    Product,
    Admin,
    Customer,
    Order,
};
