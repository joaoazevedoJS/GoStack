import 'reflect-metadata';

import FakeAppointmentsRepository from '@modules/appointments/mock/FakeAppointmentsRepository';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

import AppError from '@shared/errors/AppError';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '12121212121212',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12121212121212');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    await createAppointment.execute({
      date: new Date(2020, 6, 1, 1),
      provider_id: '12121212121212',
    });

    expect(
      createAppointment.execute({
        date: new Date(2020, 6, 1, 1),
        provider_id: '12121212121212',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
