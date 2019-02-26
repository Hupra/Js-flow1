const net = require("net");
const port = process.argv[2];
const zf = num => ("00" + num).slice(-2);

const server = net.createServer(function(socket) {
	// socket handling logic
	const date = new Date();

	const year = date.getFullYear();
	const month = zf(date.getMonth() + 1);
	const day = zf(date.getDate());
	const hour = zf(date.getHours());
	const min = zf(date.getMinutes());

	const now = `${year}-${month}-${day} ${hour}:${min}`;

	socket.end(now + "\n");
});

server.listen(port);
