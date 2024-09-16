import { Test, TestingModule } from '@nestjs/testing';
import { ReservationServiceController } from './reservation-service.controller';
import { ReservationServiceService } from './reservation-service.service';

describe('ReservationServiceController', () => {
  let reservationServiceController: ReservationServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReservationServiceController],
      providers: [ReservationServiceService],
    }).compile();

    reservationServiceController = app.get<ReservationServiceController>(ReservationServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reservationServiceController.getHello()).toBe('Hello World!');
    });
  });
});
