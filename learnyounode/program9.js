const http = require("http");
const collection = [];

function printCollection() {
	for (let story in collection) {
		console.log(collection[story]);
	}
}

function doStuff(index) {
	//skip first 2 args
	http.get(process.argv[2 + index], response => {
		let story = "";

		response.setEncoding("utf8"); // dont need to use toString

		//when we recieve new data add word to story
		response.on("data", word => {
			story += word;
		});

		response.on("end", () => {
			collection[index] = story;
			if (collection.length === 3) printCollection();
		});
	});
}

for (var i = 0; i < 3; i++) doStuff(i);
