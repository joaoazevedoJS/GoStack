import { isEqual } from 'date-fns';
import { v4 as uuid } from 'uuid';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentRepository';
import IAppointment from '@modules/appointments/entities/IAppointment';

import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

class FakeAppointmentsRepository implements IAppointmentsRepository {
  private appointments: IAppointment[] = [];

  public async findByDate(date: Date): Promise<IAppointment | undefined> {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(appointment.date, date),
    );

    return findAppointment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<IAppointment> {
    const appointment: IAppointment = {
      id: uuid(),
      date,
      provider_id,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.appointments.push(appointment);

    return appointment;
  }
}

export default FakeAppointmentsRepository;
