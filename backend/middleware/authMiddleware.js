const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
    try {

        // Safely get token for both GET and POST requests
        const token =
            req.body?.token ||
            req.header("Authorization")?.replace("Bearer ", "");

        console.log("Received Token:", token);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token Missing",
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("Decoded User:", decoded);

        req.user = decoded;

        next();

    } catch (error) {

        console.log(error);

        return res.status(401).json({
            success: false,
            message: "Authentication Failed",
        });

    }
};