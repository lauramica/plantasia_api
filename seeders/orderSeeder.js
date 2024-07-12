const { customAlphabet } = require("nanoid");
const { Order } = require("../models");
const { faker } = require("@faker-js/faker");

async function orderSeeder() {
    const orders = [];

    for (let i = 0; i < 3; i++) {
        const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 8);
        orders.push({
            total_price: 64.9,
            order_address: {
                address: "customerStreet Number",
                city: "customerCity",
                state: "customerState",
                country: "UY",
                postalcode: "customerPostalCode",
            },
            order_id: nanoid(),
            state: "delivered",
            products: [
                {
                    id: 1,
                    name: "Baby Florida Ghost (Philodendron)",
                    image: "bby_florida_ghost.png",
                    type: { name: "plants" },
                    price: 32.45,
                    quantity: 2,
                },
            ],
            buyer: {
                email: "customer@gmail.com",
                phone: "092998877",
                firstname: "customerFirstName",
                lastname: "customerLastName",
            },
            payment: "creditCard",
            customerId: 1,
        });
    }

    await Order.bulkCreate(orders);
    console.log("[Database] Order seeder executed succesfully");
}

module.exports = orderSeeder;
