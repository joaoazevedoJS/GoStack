import ICreateUserDTO from '../dtos/ICreateUserDTO';

import User from '../entities/IUsers';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByMail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
