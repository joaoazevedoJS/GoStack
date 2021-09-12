import IUserTokens from '../entities/IUserTokens';

export default interface IUserTokensRepository {
  generate(user_id: string): Promise<IUserTokens>;
  findByToken(token: string): Promise<IUserTokens | undefined>;
}
