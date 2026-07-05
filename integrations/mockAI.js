async function generateResponse(message) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
        success: true,
        reply: `Mock AI: ${message}`
    };
}

module.exports = {
    generateResponse
};
