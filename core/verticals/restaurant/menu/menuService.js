const menuData = require("./menuData.json");

function loadMenu() {
  return menuData;
}

module.exports = { loadMenu };
