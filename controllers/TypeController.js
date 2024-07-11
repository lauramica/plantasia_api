const { Type, Product } = require("../models");

const TypeController = {
    showList: async (req, res) => {
        try {
            const types = await Type.findAll();
            return res.json({ types });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to show types" });
        }
    },
    show: async (req, res) => {
        try {
            const type = await Type.findByPk(req.params.id, {
                include: [{ model: Product, include: Type }],
            });
            return res.json({ type });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to show type" });
        }
    },
    store: async (req, res) => {
        try {
            const { name } = req.body;

            await Type.create({
                name,
            });
            return res.send({ msg: "Type successfully created" });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to create type" });
        }
    },
    update: async (req, res) => {
        try {
            const { name } = req.body;

            await Type.update(
                {
                    name,
                },
                { where: { id: req.params.id } },
            );
            return res.send({ msg: "Type successfully updated" });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to update type" });
        }
    },
    destroy: async (req, res) => {
        try {
            await Type.destroy({ where: { id: req.params.id } });
            return res.send({ msg: "Type successfully deleted" });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to delete type" });
        }
    },
};

module.exports = TypeController;
