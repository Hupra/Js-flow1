const http = require("http");
const url = require("url");
const makeSecureRandom = require("./opgave1c.js");

const targetUrl = "/api/securerandoms";
const port = 666;

const server = http.createServer((request, response) => {
	response.writeHead(200, { "Content-Type": "application/json" });
	const parsedUrl = url.parse(request.url, true);

	if (parsedUrl.pathname === targetUrl) {
		const data = makeSecureRandom(6);

		data.then(e => {
			response.end(JSON.stringify(e));
		});
	} else {
		response.end(JSON.stringify("wrong url"));
	}
});

server.listen(port);

//http.get(url, callback);
