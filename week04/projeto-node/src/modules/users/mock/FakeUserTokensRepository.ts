import { v4 as uuid } from 'uuid';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import IUserTokens from '@modules/users/entities/IUserTokens';

class FakeUserTokensRepository implements IUserTokensRepository {
  private userTokens: IUserTokens[] = [];

  public async generate(user_id: string): Promise<IUserTokens> {
    const userToken: IUserTokens = {
      id: uuid(),
      token: uuid(),
      user_id,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.userTokens.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<IUserTokens | undefined> {
    const userToken = this.userTokens.find(
      findToken => findToken.token === token,
    );

    return userToken;
  }
}

export default FakeUserTokensRepository;
