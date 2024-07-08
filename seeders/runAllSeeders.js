require("dotenv").config();
const dataBase = require("../models");

async function runAllSeeders() {
    await dataBase.sequelize.sync({ force: true });

    await require("./typeSeeder")();
    await require("./productSeeder")();
    await require("./adminSeeder")();
    await require("./customerSeeder")();
    await require("./orderSeeder")();

    console.log("[Database] ¡Los datos de prueba fueron insertados!");
    process.exit();
}

runAllSeeders();
