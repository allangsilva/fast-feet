import { Router } from 'express';

import sessionController from './app/controllers/sessionController';

const routes = Router();

routes.post('/login', sessionController.store);

export default routes;
