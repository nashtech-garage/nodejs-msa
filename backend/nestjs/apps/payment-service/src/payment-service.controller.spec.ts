import { Test, TestingModule } from '@nestjs/testing';
import { PaymentServiceController } from './payment-service.controller';
import { PaymentServiceService } from './payment-service.service';

describe('PaymentServiceController', () => {
  let paymentServiceController: PaymentServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaymentServiceController],
      providers: [PaymentServiceService],
    }).compile();

    paymentServiceController = app.get<PaymentServiceController>(PaymentServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(paymentServiceController.getHello()).toBe('Hello World!');
    });
  });
});
