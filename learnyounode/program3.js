const fs = require("fs");
const buf = fs.readFileSync(process.argv[2]);
const txt = buf.toString();
const arr = txt.split("\n");
console.log(arr.length - 1);
