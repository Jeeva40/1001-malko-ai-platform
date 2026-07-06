const { getRestaurantContext } = require("../core/verticals/restaurant/restaurantVertical");

async function buildPrompt(context) {
  const restaurantContext = await getRestaurantContext();

  return `Business Name:
${restaurantContext.businessProfile.businessName}

Business Type:
${restaurantContext.businessProfile.businessType}

Business Description:
${restaurantContext.businessProfile.description}

Knowledge Base:
${JSON.stringify(restaurantContext.knowledgeBase, null, 2)}

Customer Message:
${context.currentMessage}

Instructions:
Answer as a helpful AI employee for this business.
Use the business profile and knowledge base to answer accurately.
If the information is unavailable, politely say you don't know instead of inventing an answer.`;
}

module.exports = { buildPrompt };
