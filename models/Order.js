const { Model, DataTypes } = require("sequelize");

class Order extends Model {
    static initModel(sequelize) {
        Order.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                order_id: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: false,
                },
                total_price: {
                    type: DataTypes.DECIMAL(5, 2),
                    allowNull: false,
                },
                order_address: {
                    type: DataTypes.JSON,
                    allowNull: false,
                },
                state: {
                    type: DataTypes.ENUM(
                        "pending",
                        "canceled",
                        "processing",
                        "in transit",
                        "delivered",
                    ),
                    allowNull: false,
                    defaultValue: "pending",
                },
                products: {
                    type: DataTypes.JSON,
                    allowNull: false,
                },
                buyer: {
                    type: DataTypes.JSON,
                    allowNull: false,
                },
                payment: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
            },
            {
                sequelize,
                paranoid: true,
                modelName: "order",
            },
        );
        return Order;
    }
}

module.exports = Order;
