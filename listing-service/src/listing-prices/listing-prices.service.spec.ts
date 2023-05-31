import { Test, TestingModule } from '@nestjs/testing';
import { ListingPricesService } from './listing-prices.service';

describe('ListingPricesService', () => {
  let service: ListingPricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListingPricesService],
    }).compile();

    service = module.get<ListingPricesService>(ListingPricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
