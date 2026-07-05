const { getBusinessProfile } = require("../core/businessProfile/businessProfile");

async function test() {
    const profile = await getBusinessProfile();
    console.log(profile);
}

test();