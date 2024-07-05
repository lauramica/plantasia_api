require("dotenv").config();
const dataBase = require("./models");

async function db() {
    await dataBase.sequelize.sync({ force: true });
    console.log("[Database] Tables succesfuly created");
    process.exit();
}

db();
