const { getVerticalContext } = require("../core/verticals/verticalLoader");

async function buildPrompt(context) {
  const verticalContext = await getVerticalContext("restaurant");

  return `Business Name:
${verticalContext.businessProfile.businessName}

Business Type:
${verticalContext.businessProfile.businessType}

Business Description:
${verticalContext.businessProfile.description}

Knowledge Base:
${JSON.stringify(verticalContext.knowledgeBase, null, 2)}

Customer Message:
${context.currentMessage}

Instructions:
Answer as a helpful AI employee for this business.
Use the business profile and knowledge base to answer accurately.
If the information is unavailable, politely say you don't know instead of inventing an answer.`;
}

module.exports = { buildPrompt };
