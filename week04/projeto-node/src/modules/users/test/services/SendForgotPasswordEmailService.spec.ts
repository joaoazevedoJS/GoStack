import 'reflect-metadata';

import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/mock/FakeUsersRepository';
import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

import FakeMailProvider from '@shared/providers/MailProvider/mocks/FakeMailProvider';
import FakeUserTokensRepository from '@modules/users/mock/FakeUserTokensRepository';

let fakeRepository: FakeUsersRepository;
let fakeMailProvider: FakeMailProvider;
let fakeUserTokensRepository: FakeUserTokensRepository;
let sendForgotPasswordEmail: SendForgotPasswordEmailService;

describe('SendForgotPasswordEmail', () => {
  beforeEach(() => {
    fakeRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeMailProvider();
    fakeUserTokensRepository = new FakeUserTokensRepository();

    sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeRepository,
      fakeUserTokensRepository,
      fakeMailProvider,
    );
  });

  it('should be able to recover the password using the email', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeRepository.create({
      email: 'test@gmail.com',
      name: 'test',
      password: '123456',
    });

    await sendForgotPasswordEmail.execute({
      email: 'test@gmail.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to recover if user not exist', async () => {
    await expect(
      sendForgotPasswordEmail.execute({
        email: 'test@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should generate a forgot password token', async () => {
    const generateToken = jest.spyOn(fakeUserTokensRepository, 'generate');

    const user = await fakeRepository.create({
      email: 'test@gmail.com',
      name: 'test',
      password: '123456',
    });

    await sendForgotPasswordEmail.execute({
      email: 'test@gmail.com',
    });

    expect(generateToken).toHaveBeenCalledWith(user.id);
  });
});
