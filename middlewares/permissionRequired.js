const { expressjwt: checkJwt } = require("express-jwt");

const permissionRequired = {
    admin: (req, res, next) => {
        try {
            checkJwt({
                secret: process.env.JWT_SECRET_ADMIN,
                algorithms: ["HS256"],
            });
            next();
        } catch (err) {
            console.error(err);
            return res.json({ msg: "Access denied: you don't have permission to access" });
        }
    },
    customer: (req, res, next) => {
        try {
            checkJwt({
                secret: process.env.JWT_SECRET_CUSTOMER,
                algorithms: ["HS256"],
            });
            next();
        } catch (err) {
            console.error(err);
            return res.json({ msg: "Access denied: you don't have permission to access" });
        }
    },
};

module.exports = permissionRequired;
