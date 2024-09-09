import { Test, TestingModule } from '@nestjs/testing';
import { ListingServiceController } from './listing-service.controller';
import { ListingServiceService } from './listing-service.service';

describe('ListingServiceController', () => {
  let listingServiceController: ListingServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ListingServiceController],
      providers: [ListingServiceService],
    }).compile();

    listingServiceController = app.get<ListingServiceController>(ListingServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(listingServiceController.getHello()).toBe('Hello World!');
    });
  });
});
