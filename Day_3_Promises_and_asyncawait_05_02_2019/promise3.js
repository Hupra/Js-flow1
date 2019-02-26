const myPromise = require("./myPromise");

let results = [];

myPromise("hello", 200)
	.then(msg => {
		results.push(msg);
		return myPromise("hello again", 200);
	})
	.then(msg => {
		results.push(msg);
		return myPromise("hello again again", 200);
	})
	.then(msg => results.push(msg))
	.finally(() => console.log(results));
