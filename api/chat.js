const express = require("express");
const { generateAIResponse } = require("../engine/aiEngine");

const router = express.Router();

router.post("/", async (req, res) => {
    console.log("POST /api/chat hit");
    const { message } = req.body;

    if (!message || typeof message !== "string" || message.trim() === "") {
        return res.status(400).json({
            success: false,
            error: "Message is required."
        });
    }

    try {
        const aiResponse = await generateAIResponse(message);

        return res.status(200).json({
            success: aiResponse.success,
            reply: aiResponse.reply,
            received: message
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Internal AI Engine Error"
        });
    }
});

module.exports = router;