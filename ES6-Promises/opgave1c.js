const makeSecureRandom = size => {
	return new Promise((resolve, reject) => {
		require("crypto").randomBytes(size, function(err, buffer) {
			return resolve({ length: size, random: buffer.toString("hex") });
		});
	});
};

const obj = {
	title: 6 + "Secure randoms",
	randoms: []
};

const proms = [];

proms.push(makeSecureRandom(08).then(e => obj.randoms.push(e)));
proms.push(makeSecureRandom(16).then(e => obj.randoms.push(e)));
proms.push(makeSecureRandom(24).then(e => obj.randoms.push(e)));
proms.push(makeSecureRandom(32).then(e => obj.randoms.push(e)));
proms.push(makeSecureRandom(40).then(e => obj.randoms.push(e)));
proms.push(makeSecureRandom(48).then(e => obj.randoms.push(e)));

Promise.all(proms).then(() => console.log(obj));

module.exports = makeSecureRandom;
