const knowledgeBaseData = require("./knowledgeBaseData.json");

async function getKnowledgeBase() {
  return knowledgeBaseData;
}

module.exports = { getKnowledgeBase };
