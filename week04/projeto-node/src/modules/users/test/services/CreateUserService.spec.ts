import 'reflect-metadata';

import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/mock/FakeUsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import FakeHashProvider from '@modules/users/providers/HashProvider/mock/FakeHashProvider';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(fakeRepository, fakeHashProvider);

    const user = await createUser.execute({
      email: 'test@gmail.com',
      name: 'test test',
      password: '4321test',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const fakeRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(fakeRepository, fakeHashProvider);

    await createUser.execute({
      email: 'test@gmail.com',
      name: 'test one',
      password: '4321test',
    });

    await expect(
      createUser.execute({
        email: 'test@gmail.com',
        name: 'test two',
        password: '4321test',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
