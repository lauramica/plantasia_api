const { Model, DataTypes } = require("sequelize");

class Admin extends Model {
    static initModel(sequelize) {
        Admin.init(
            {
                id: {
                    type: DataTypes.INTEGER,
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
                avatar: {
                    type: DataTypes.TEXT,
                    allowNull: true,
                    defaultValue: "admin_avatar.png",
                },
            },
            {
                sequelize,
                modelName: "admin",
            },
        );
        return Admin;
    }
}

module.exports = Admin;
