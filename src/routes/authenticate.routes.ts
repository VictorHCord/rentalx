import { Router } from 'express';
import { AuthenticateUserController } from 'modules/accounts/useCases/authenticateUser/AuthenticationUserController';

const authenticateRoutes = Router();

const authenticationUserController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', authenticationUserController.handle)

export { authenticateRoutes };
