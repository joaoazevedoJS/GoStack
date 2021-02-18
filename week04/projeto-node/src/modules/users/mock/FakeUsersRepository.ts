import { hash } from 'bcryptjs';
import { v4 as uuid } from 'uuid';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUser from '@modules/users/entities/IUsers';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class FakeUsersRepository implements IUsersRepository {
  private users: IUser[] = [];

  public async findById(id: string): Promise<IUser | undefined> {
    const findUser = this.users.find(user => user.id === id);

    return findUser;
  }

  public async findByMail(email: string): Promise<IUser | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<IUser> {
    const user: IUser = {
      id: uuid(),
      email,
      name,
      password,
      avatar: '',
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.users.push(user);

    return user;
  }

  public async save(user: IUser): Promise<IUser> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    if (findIndex >= 0) {
      this.users[findIndex] = user;
    } else {
      this.users.push(user);
    }

    return user;
  }
}

export default FakeUsersRepository;
