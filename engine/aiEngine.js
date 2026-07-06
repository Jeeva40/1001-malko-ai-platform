const { generateResponse } = require("../integrations/mockAI");
const { buildPrompt } = require("./promptBuilder");

// Delegates message handling to the mock AI provider and returns its response unchanged.
async function generateAIResponse(userMessage) {
    const prompt = await buildPrompt(userMessage);
    const response = await generateResponse(prompt);
    return response;
}

module.exports = {
    generateAIResponse
};
