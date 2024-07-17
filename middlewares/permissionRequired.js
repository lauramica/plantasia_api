const permissionRequired = {
    admin: (req, res, next) => {
        try {
            if (req.auth.role === "admin") next();
        } catch (err) {
            console.error(err);
            return res
                .status(403)
                .json({ error: "Access denied: you don't have permission to access" });
        }
    },
    customer: (req, res, next) => {
        try {
            if (req.auth.role === "customer") next();
        } catch (err) {
            console.error(err);
            return res
                .status(403)
                .json({ error: "Access denied: you don't have permission to access" });
        }
    },
};

module.exports = permissionRequired;
