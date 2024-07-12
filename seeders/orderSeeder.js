const { Order } = require("../models");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcryptjs");

async function orderSeeder() {
    const orders = [];

    for (let i = 0; i < 3; i++) {
        const order_id = await bcrypt.hash(`${Date}${i}1customer@gmail.com`, 12);
        orders.push({
            total_price: 64.9,
            order_address: "Mercedes 1568, Montevideo, Uruguay",
            order_id,
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
