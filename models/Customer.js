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
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        isEmail: true,
                    },
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
                    type: DataTypes.JSON,
                    allowNull: true,
                },
                cart: {
                    type: DataTypes.JSON,
                    allowNull: true,
                },
            },
            {
                sequelize,
                paranoid: true,
                modelName: "customer",
            },
        );
        return Customer;
    }
}

module.exports = Customer;
