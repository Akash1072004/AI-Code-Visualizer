const User = require("../models/User");
const History = require("../models/History");

exports.getDashboard = async (req, res) => {
    try {

        const totalUsers = await User.countDocuments();

        const totalAnalyses = await History.countDocuments();

        const recentUsers = await User.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select("name email createdAt");

        const recentAnalyses = await History.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .populate("user", "name");

        res.json({
            success: true,
            totalUsers,
            totalAnalyses,
            recentUsers,
            recentAnalyses,
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });

    }
};