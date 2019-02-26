const fetch = require("node-fetch");
const url = "https://swapi.co/api/people/1";

(async () => {
	const response = await fetch(url);
	const status = response.status;
	const json = await response.json();
	console.log(status, json);
})();
