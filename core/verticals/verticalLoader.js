const { getRestaurantContext } = require("./restaurant/restaurantVertical");

async function getVerticalContext(verticalName) {
  if (verticalName === "restaurant") {
    return await getRestaurantContext();
  }

  throw new Error("Unsupported vertical: " + verticalName);
}

module.exports = { getVerticalContext };
