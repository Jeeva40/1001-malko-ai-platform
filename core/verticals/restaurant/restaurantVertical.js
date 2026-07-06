const { getBusinessProfile } = require("../../businessProfile/businessProfile");
const { getKnowledgeBase } = require("../../knowledgeBase/knowledgeBase");

async function getRestaurantContext() {
  const businessProfile = await getBusinessProfile();
  const knowledgeBase = await getKnowledgeBase();

  return {
    businessProfile,
    knowledgeBase
  };
}

module.exports = { getRestaurantContext };
