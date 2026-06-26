const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
    try {
        const token =
            req.body.token ||
            req.header("Authorization")?.replace("Bearer ", "");

            console.log("Received Token:", token);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token Missing",
            });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decoded User:", decoded);
            req.user = decoded;
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Invalid Token",
            });
        }

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Authentication Failed",
        });
    }
};