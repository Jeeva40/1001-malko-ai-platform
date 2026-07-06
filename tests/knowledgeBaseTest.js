const { getKnowledgeBase } = require("../core/knowledgeBase/knowledgeBase");

async function test() {
    const knowledgeBase = await getKnowledgeBase();
    console.log(knowledgeBase);
}

test();