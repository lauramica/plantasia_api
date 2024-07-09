const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");
const bcrypt = require("bcryptjs");

async function adminSeeder() {
    const hashedPassword = await bcrypt.hash("1234", 12);

    const admins = [
        {
            email: "admin@gmail.com",
            firstname: "adminFirstName",
            lastname: "adminLastName",
            password: hashedPassword,
        },
    ];

    for (let i = 0; i < 4; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        admins.push({
            email: faker.internet.email({ firstName, lastName, provider: "gmail.com" }),
            firstname: firstName,
            lastname: lastName,
            password: hashedPassword,
        });
    }

    await Admin.bulkCreate(admins);
    console.log("[Database] Admin seeder executed succesfully");
}

module.exports = adminSeeder;
