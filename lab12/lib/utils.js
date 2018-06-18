const jwt = require('jsonwebtoken');

module.exports = {
	generateToken: user => {

		const u = {
			_id: user._id,
			name: user.name,
			username: user.username,
			email: user.email
		};
		return token = jwt.sign(u, "jajaj", {
			expiresIn: 60 * 60 * 24
		});

	},
	verifyToken: token => {
		return new Promise((resolve, reject) => {
			jwt.verify(token, "jajaj", (err,user) => {
				if (err) {
					reject(err);
				}

				resolve(user);
			});
		});
	},
	getCleanUser: user => {
		const { password, age, createdAt, updatedAt, __v, ...exposedData } = user;
		return exposedData;
	}
};