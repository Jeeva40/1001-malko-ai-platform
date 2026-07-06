const express = require("express");
const { getKnowledgeBase } = require("../core/knowledgeBase/knowledgeBase");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const knowledgeBase = await getKnowledgeBase();
    res.status(200).json(knowledgeBase);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to load knowledge base."
    });
  }
});

module.exports = router;
