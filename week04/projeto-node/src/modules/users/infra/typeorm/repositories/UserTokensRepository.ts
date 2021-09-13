import { getRepository, Repository } from 'typeorm';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import IUserTokens from '@modules/users/entities/IUserTokens';

import UserToken from '../entities/UserToken';

class UserTokensRepository implements IUserTokensRepository {
  private ormRepository: Repository<IUserTokens>;

  constructor() {
    this.ormRepository = getRepository(UserToken);
  }

  public async findByToken(token: string): Promise<IUserTokens | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        token,
      },
    });

    return user;
  }

  public async generate(user_id: string): Promise<IUserTokens> {
    const userToken = this.ormRepository.create({
      user_id,
    });

    await this.ormRepository.save(userToken);

    return userToken;
  }
}

export default UserTokensRepository;
