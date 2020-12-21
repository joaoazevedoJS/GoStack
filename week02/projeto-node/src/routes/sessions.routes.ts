import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user } = await authenticateUser.execute({ email, password });

    const userWithoutPassword = { ...user, password: undefined };

    return response.json(userWithoutPassword);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

export default sessionsRouter;
