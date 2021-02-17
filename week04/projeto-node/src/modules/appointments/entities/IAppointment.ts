import IUser from '@modules/users/entities/IUsers';

class IAppointment {
  public id: string;

  public provider_id: string;

  public provider: IUser;

  public date: Date;

  public created_at: Date;

  public updated_at: Date;
}

export default IAppointment;
