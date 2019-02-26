const http = require("http");
const url = require("url");
const port = process.argv[2];

function parsetime(time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	};
}

function unixtime(time) {
	return { unixtime: time.getTime() };
}

const handleQuery = url => {
	const time = new Date(url.query.iso);
	switch (url.pathname) {
		case "/api/parsetime":
			return parsetime(time);
		case "/api/unixtime":
			return unixtime(time);
	}
};

var server = http.createServer((request, response) => {
	response.writeHead(200, { "Content-Type": "application/json" });

	const parsedUrl = url.parse(request.url, true);

	if (request.method === "GET") {
		response.end(JSON.stringify(handleQuery(parsedUrl)));
	} else {
		response.end();
	}
});

server.listen(port);
