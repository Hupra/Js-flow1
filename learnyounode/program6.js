const module6 = require("./module6.js");

const dir = process.argv[2];
const ext = process.argv[3];
const callback = (err, data) => data.forEach(e => console.log(e));

module6(dir, ext, callback);
