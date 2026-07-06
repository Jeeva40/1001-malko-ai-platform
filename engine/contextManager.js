async function buildContext(userMessage) {
  return {
    conversationHistory: [],
    currentMessage: userMessage
  };
}

module.exports = { buildContext };
