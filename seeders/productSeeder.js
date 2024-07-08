const { Product } = require("../models");
const { products } = require("./dbContents");

async function productSeeder() {
    await Product.bulkCreate(products);
    console.log("[Database] Product seeder executed succesfully");
}

module.exports = productSeeder;
