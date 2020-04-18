import { Router } from 'express';

import sessionController from './app/controllers/sessionController';
import recipientController from './app/controllers/recipientController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/login', sessionController.store);
routes.post('/recipients', authMiddleware, recipientController.store);

export default routes;
