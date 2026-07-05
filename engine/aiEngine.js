const { generateResponse } = require("../integrations/mockAI");

// Delegates message handling to the mock AI provider and returns its response unchanged.
async function generateAIResponse(message) {
    const response = await generateResponse(message);
    return response;
}

module.exports = {
    generateAIResponse
};
