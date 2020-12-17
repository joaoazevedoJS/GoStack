import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();
const createUser = new CreateUserService();

usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await createUser.execute({ name, email, password });

    const userWithoutPassword = { ...user, password: undefined };

    return res.json(userWithoutPassword);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

export default usersRouter;
