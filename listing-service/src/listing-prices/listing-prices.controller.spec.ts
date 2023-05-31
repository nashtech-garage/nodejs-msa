import { Test, TestingModule } from '@nestjs/testing';
import { ListingPricesController } from './listing-prices.controller';

describe('ListingPricesController', () => {
  let controller: ListingPricesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListingPricesController],
    }).compile();

    controller = module.get<ListingPricesController>(ListingPricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
