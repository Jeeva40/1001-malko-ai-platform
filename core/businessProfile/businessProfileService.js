const businessProfileData = require("./businessProfileData.json");

async function getBusinessProfile() {
  return businessProfileData;
}

module.exports = { getBusinessProfile };
