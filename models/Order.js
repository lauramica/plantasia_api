const { Model, DataTypes } = require("sequelize");

class Order extends Model {
    static initModel(sequelize) {
        Order.init(
            {
                id: {
                    type: DataTypes.BIGINT.UNSIGNED,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                total_price: {
                    type: DataTypes.DECIMAL(5, 2),
                    allowNull: false,
                },
                order_address: {
                    type: DataTypes.TEXT,
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
