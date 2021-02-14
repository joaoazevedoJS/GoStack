import IUser from '@modules/users/entities/IUsers';

export default interface IAppointment {
  id: string;

  provider_id: string;

  provider: IUser;

  date: Date;

  created_at: Date;

  updated_at: Date;
}
