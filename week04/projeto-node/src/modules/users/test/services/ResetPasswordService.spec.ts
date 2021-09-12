import 'reflect-metadata';

// import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/mock/FakeUsersRepository';
import FakeUserTokensRepository from '@modules/users/mock/FakeUserTokensRepository';
import ResetPasswordService from '@modules/users/services/ResetPasswordService';
import FakeHashProvider from '@modules/users/providers/HashProvider/mock/FakeHashProvider';

let fakeRepository: FakeUsersRepository;
let fakeUserTokensRepository: FakeUserTokensRepository;
let fakeHashProvider: FakeHashProvider;
let resetPassword: ResetPasswordService;

describe('resetPassword', () => {
  beforeEach(() => {
    fakeRepository = new FakeUsersRepository();
    fakeUserTokensRepository = new FakeUserTokensRepository();
    fakeHashProvider = new FakeHashProvider();

    resetPassword = new ResetPasswordService(
      fakeRepository,
      fakeUserTokensRepository,
      fakeHashProvider,
    );
  });

  it('should be able to reset the password', async () => {
    const user = await fakeRepository.create({
      email: 'test@gmail.com',
      name: 'test',
      password: '123456',
    });

    const { token } = await fakeUserTokensRepository.generate(user.id);

    await resetPassword.execute({
      password: '654321',
      token,
    });

    const userAfterReset = await fakeRepository.findById(user.id);

    expect(userAfterReset?.password).toBe('654321');
  });
});
