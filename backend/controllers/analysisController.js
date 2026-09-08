const History = require("../models/History");

const ai = require("../utils/gemini");

exports.analyzeCode = async (req, res) => {
    try {
        const { code } = req.body;

        if (!code) {
            return res.status(400).json({
                success: false,
                message: "Code is required",
            });
        }

        const prompt = `
You are an expert software engineer.

Analyze this code and return:

1. Explanation
2. Time Complexity
3. Space Complexity
4. Bugs (if any)
5. Optimized Code
6. Dry Run

Code:

${code}
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        await History.create({
            user: req.user.id,
            code,
            analysis: response.text,
        });

        res.json({
            success: true,
            analysis: response.text,
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};