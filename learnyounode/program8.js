const http = require("http");

const url = process.argv[2];

function callback(response) {
	response.setEncoding("utf8");

	let count = 0;
	let str = "";

	response.on("data", word => {
		count += word.length;
		str += word;
	});

	response.on("end", () => {
		console.log(count);
		console.log(str);
	});
}

http.get(url, callback);
