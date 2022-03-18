import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticationUserController';
import { Router } from 'express';

const authenticateRoutes = Router();

const authenticationUserController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', authenticationUserController.handle)

export { authenticateRoutes };
