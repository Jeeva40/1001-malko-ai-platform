const { getMenu } = require("../core/verticals/restaurant/menu/menu");

function test() {
    const menu = getMenu();
    console.log(menu);
}

test();
