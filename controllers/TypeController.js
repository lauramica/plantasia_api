const { Type } = require("../models");

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
};

module.exports = TypeController;
