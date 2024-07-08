const { Model, DataTypes } = require("sequelize");

class Type extends Model {
    static initModel(sequelize) {
        Type.init(
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
            },
            {
                sequelize,
                modelName: "type",
            },
        );
        return Type;
    }
}

module.exports = Type;
