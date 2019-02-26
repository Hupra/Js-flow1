const makeObject = cb => {
	const obj = {
		title: 6 + "Secure randoms",
		randoms: []
	};

	require("crypto").randomBytes(8, function(err, buffer) {
		obj.randoms.push({ length: 8, random: buffer.toString("hex") });

		require("crypto").randomBytes(16, function(err, buffer) {
			obj.randoms.push({ length: 16, random: buffer.toString("hex") });

			require("crypto").randomBytes(24, function(err, buffer) {
				obj.randoms.push({ length: 24, random: buffer.toString("hex") });

				require("crypto").randomBytes(32, function(err, buffer) {
					obj.randoms.push({ length: 32, random: buffer.toString("hex") });

					require("crypto").randomBytes(40, function(err, buffer) {
						obj.randoms.push({
							length: 40,
							random: buffer.toString("hex")
						});

						require("crypto").randomBytes(48, function(err, buffer) {
							obj.randoms.push({
								length: 48,
								random: buffer.toString("hex")
							});
							cb(obj);
						});
					});
				});
			});
		});
	});
};

makeObject(e => console.log(e));
