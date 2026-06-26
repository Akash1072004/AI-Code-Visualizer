exports.analyzeCode = async (req, res) => {

    const { code } = req.body;

    res.status(200).json({
        success: true,
        explanation: "AI integration coming next.",
        code
    });

};