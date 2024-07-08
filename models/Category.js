const { Model, DataTypes } = require("sequelize");

class Category extends Model {
    static initModel(sequelize) {
        Category.init(
            {
                id: {
                    type: DataTypes.BIGINT.UNSIGNED,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                name: {
                    type: DataTypes.TEXT("tiny"),
                    allowNull: false,
                },
                values: {
                    type: DataTypes.ARRAY(DataTypes.TEXT("tiny")),
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: "category",
            },
        );
        return Category;
    }
}

module.exports = Category;
