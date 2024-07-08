const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");

async function adminSeeder() {
    const admins = [
        {
            email: "admin@gmail.com",
            firstname: "adminFirstName",
            lastname: "adminLastName",
            password: "1234",
        },
    ];

    for (let i = 0; i < 4; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        admins.push({
            email: faker.internet.email({ firstName, lastName, provider: "gmail.com" }),
            firstname: firstName,
            lastname: lastName,
            password: "1234",
        });
    }

    await Admin.bulkCreate(admins);
    console.log("[Database] Admin seeder executed succesfully");
}

module.exports = adminSeeder;
