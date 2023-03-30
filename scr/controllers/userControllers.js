import prisma from '../prisma.js';

export const createUser = async (req, res) => {
	const data = req.body;
	const user = await prisma.user.create({
		data: {
			username: data.username,
			password: data.password,
			email: data.email,
		},
	});
	if (user) {
		res.json(user);
	} else {
		throw new Error('could not create user');
	}
};
