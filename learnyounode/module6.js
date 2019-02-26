const fs = require("fs");
const path = require("path");

module.exports = function(path, ext, callback) {
	fs.readdir(path, doStuff);

	function doStuff(err, list) {
		if (err) return callback(err);

		return callback(null, list.filter(e => e.endsWith("." + ext)));
	}
};
