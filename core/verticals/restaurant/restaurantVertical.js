const { getBusinessProfile } = require("../../businessProfile/businessProfile");
const { getKnowledgeBase } = require("../../knowledgeBase/knowledgeBase");
const { getMenu } = require("./menu/menu");

async function getRestaurantContext() {
  const businessProfile = await getBusinessProfile();
  const knowledgeBase = await getKnowledgeBase();
  const menu = await getMenu();

  return {
    businessProfile,
    knowledgeBase,
    menu
  };
}

module.exports = { getRestaurantContext };
