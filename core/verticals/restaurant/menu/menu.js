const { loadMenu } = require("./menuService");

function getMenu() {
  return loadMenu();
}

module.exports = { getMenu };
