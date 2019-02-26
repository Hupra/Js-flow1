const fs = require("fs");

fs.readdir(process.argv[2], callback);

function callback(err, list) {
	const ext = process.argv[3];
	list.filter(e => e.endsWith("." + ext)).forEach(e => console.log(e));
}

///
// function correctEnding(str, end) {
// 	if (str.endsWith("." + end)) {
// 		console.log(str);
// 	}
// }

// function callback(err, list) {
// 	list.forEach(e => correctEnding(e, process.argv[3]));
// }

// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
