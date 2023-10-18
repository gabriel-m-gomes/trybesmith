import { Router } from 'express';
import verifyBody from '../middlewares/verifyBodyLogin';
import loginController from '../controller/login.controller';

const loginRouter = Router();

loginRouter.post('/login', verifyBody, loginController.login);

export default loginRouter;