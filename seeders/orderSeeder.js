const { Order } = require("../models");
const { faker } = require("@faker-js/faker");

async function orderSeeder() {
    const orders = [];

    for (let i = 0; i < 3; i++) {
        orders.push({
            total_price: 64.9,
            order_address: "Mercedes 1568, Montevideo, Uruguay",
            state: "delivered",
            products: [
                {
                    name: "Baby Florida Ghost (Philodendron)",
                    image: "bby_florida_ghost.png",
                    type: "plants",
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
    console.log("[Database] Type seeder executed succesfully");
}

module.exports = orderSeeder;
