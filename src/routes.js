import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const upload = multer(multerConfig);

const routes = Router();

routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);

routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman', DeliverymanController.update);
routes.get('/deliveryman', DeliverymanController.index);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
