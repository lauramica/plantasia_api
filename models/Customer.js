const { Model, DataTypes } = require("sequelize");

class Customer extends Model {
    static initModel(sequelize) {
        Customer.init(
            {
                id: {
                    type: DataTypes.BIGINT.UNSIGNED,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                email: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                firstname: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                lastname: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                password: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                phone: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
                address: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                },
            },
            {
                sequelize,
                modelName: "customer",
            },
        );
        return Customer;
    }
}

module.exports = Customer;
