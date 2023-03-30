import { Router } from 'express';
import { createUser } from '../controllers/userControllers.js';

const handler = Router();

handler.post('/users', createUser);

export default handler;
