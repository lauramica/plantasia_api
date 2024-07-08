const { Type } = require("../models");
const { types } = require("./dbContents");

async function typeSeeder() {
    await Type.bulkCreate(types);
    console.log("[Database] Type seeder executed succesfully");
}

module.exports = typeSeeder;
