const { readDirFiltered, readDirFilterPromise } = require("./dirFilterPromise");

const directory = process.argv[2];
const filter = process.argv[3];

readDirFiltered(directory, filter, (err, files) => {
	console.log(files.join("\n"));
});

// readDirFiltered(directory, "js", (err, files) => {
// 	console.log(files.join("\n"));

// 	readDirFiltered(directory, "json", (err, files) => {
// 		console.log(files.join("\n"));

// 		readDirFiltered(directory, "text", (err, files) => {
// 			console.log(files.join("\n"));
// 		});
// 	});
// });

readDirFilterPromise(directory, filter)
	.then(d => console.log(d.join("\n")))
	.catch(console.error);

readDirFilterPromise(directory, "js")
	.then(d => {
		console.log(d.join("\n"));
		return readDirFilterPromise(directory, "json");
	})
	.then(d => {
		console.log(d.join("\n"));
		return readDirFilterPromise(directory, "text");
	})
	.then(d => {
		console.log(d.join("\n"));
		return readDirFilterPromise("bob", "bob");
	})
	.catch(e => {
		console.log("--\n", e, "\n--");
	});
