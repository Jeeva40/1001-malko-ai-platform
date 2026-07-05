const express = require("express");
const { getBusinessProfile } = require("../core/businessProfile/businessProfile");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const profile = await getBusinessProfile();
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to load business profile."
    });
  }
});

module.exports = router;
