const fs = require("fs");
const path = require("path");

var readDirFiltered = function(pathToDir, extension, cb) {
	const ext = "." + extension;
	fs.readdir(pathToDir, (err, data) => {
		if (err) {
			return cb(err);
		}
		var files = data.filter(filename => path.extname(filename) === ext);
		cb(null, files);
	});
};

const readDirFilterPromise = (pathToDir, extension) => {
	return new Promise((resolve, reject) => {
		const ext = "." + extension;
		fs.readdir(pathToDir, (err, data) => {
			if (err) {
				return reject(err);
			}
			var files = data.filter(filename => path.extname(filename) === ext);
			return resolve(files);
		});
	});
};
module.exports = { readDirFiltered, readDirFilterPromise };
