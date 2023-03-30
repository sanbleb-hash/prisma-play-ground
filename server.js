import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './scr/prisma.js';
import userRoutes from './scr/routes/userRoutes.js';

const app = express();
const main = async () => {
	// connect to the database
	await prisma.$connect();
};
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

// middlewares
app.use(express.json());
app.use(cors());
dotenv.config();

//routes
app.get('/', (req, res) => res.send('we are live'));
app.use('/api', userRoutes);

app.listen(5000, console.log('this is working !!'));
