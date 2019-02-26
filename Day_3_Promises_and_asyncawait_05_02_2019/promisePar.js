const myPromise = require("./myPromise");

const promises = [];

promises.push(myPromise("hello", 3000));
promises.push(myPromise("hello again", 3000));
promises.push(myPromise("hello again again", 3000));
//Promise.all(p1, p2, p3).then(() => console.log(results.join("\n")));

Promise.all(promises).then(console.log);
