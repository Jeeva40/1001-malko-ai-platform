const { generateResponse } = require("../integrations/mockAI");
const { buildPrompt } = require("./promptBuilder");
const { buildContext } = require("./contextManager");

// Delegates message handling to the mock AI provider and returns its response unchanged.
async function generateAIResponse(userMessage) {
    const context = await buildContext(userMessage);
    const prompt = await buildPrompt(context);
    const response = await generateResponse(prompt);
    return response;
}

module.exports = {
    generateAIResponse
};
