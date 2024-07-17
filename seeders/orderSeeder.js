const { customAlphabet } = require("nanoid");
const { faker } = require("@faker-js/faker");

const { Order } = require("../models");

async function orderSeeder() {
    const orders = [];

    for (let i = 0; i < 3; i++) {
        const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 8);

        orders.push({
            total_price: 64.9,
            order_address: {
                address: "Bush 5173",
                city: "Enchanted Forest",
                state: "Far Far Away Land",
                country: "NL",
                postalcode: "3739 UY",
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
