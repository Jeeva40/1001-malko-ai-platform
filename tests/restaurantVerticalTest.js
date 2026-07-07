const { getRestaurantContext } = require("../core/verticals/restaurant/restaurantVertical");

async function test() {
    const context = await getRestaurantContext();
    console.log(context);
}

test();
