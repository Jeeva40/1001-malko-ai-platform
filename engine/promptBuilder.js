const { getBusinessProfile } = require("../core/businessProfile/businessProfile");
const { getKnowledgeBase } = require("../core/knowledgeBase/knowledgeBase");

async function buildPrompt(userMessage) {
  const businessProfile = await getBusinessProfile();
  const knowledgeBase = await getKnowledgeBase();

  return `Business Name:
${businessProfile.businessName}

Business Type:
${businessProfile.businessType}

Business Description:
${businessProfile.description}

Knowledge Base:
${JSON.stringify(knowledgeBase, null, 2)}

Customer Message:
${userMessage}

Instructions:
Answer as a helpful AI employee for this business.
Use the business profile and knowledge base to answer accurately.
If the information is unavailable, politely say you don't know instead of inventing an answer.`;
}

module.exports = { buildPrompt };
