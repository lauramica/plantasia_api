const { Model, DataTypes } = require("sequelize");

class Product extends Model {
    static initModel(sequelize) {
        Product.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                image: {
                    type: DataTypes.TEXT("tiny"),
                    allowNull: false,
                },
                stock: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
                price: {
                    type: DataTypes.DECIMAL(5, 2),
                    allowNull: false,
                    defaultValue: 0,
                },
                trending: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                slug: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
            },
            {
                sequelize,
                modelName: "product",
            },
        );
        return Product;
    }
}

module.exports = Product;
