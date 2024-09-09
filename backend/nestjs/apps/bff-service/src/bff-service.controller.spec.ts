import { Test, TestingModule } from '@nestjs/testing';
import { BffServiceController } from './bff-service.controller';
import { BffServiceService } from './bff-service.service';

describe('BffServiceController', () => {
  let bffServiceController: BffServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BffServiceController],
      providers: [BffServiceService],
    }).compile();

    bffServiceController = app.get<BffServiceController>(BffServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bffServiceController.getHello()).toBe('Hello World!');
    });
  });
});
