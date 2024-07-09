const { faker } = require("@faker-js/faker");
const { Customer } = require("../models");
const bcrypt = require("bcryptjs");

async function customerSeeder() {
    const hashedPassword = await bcrypt.hash("1234", 12);

    const customers = [
        {
            email: "customer@gmail.com",
            firstname: "customerFirstName",
            lastname: "customerLastName",
            password: hashedPassword,
            phone: "092998877",
        },
    ];

    for (let i = 0; i < 29; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();

        customers.push({
            email: faker.internet.email({ firstName, lastName, provider: "gmail.com" }),
            firstname: firstName,
            lastname: lastName,
            password: hashedPassword,
        });
    }

    await Customer.bulkCreate(customers);
    console.log("[Database] Customer seeder executed succesfully");
}

module.exports = customerSeeder;
