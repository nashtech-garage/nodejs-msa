import { Test, TestingModule } from '@nestjs/testing';
import { ListingController } from './listing.controller';

describe('ListingController', () => {
  let controller: ListingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListingController],
    }).compile();

    controller = module.get<ListingController>(ListingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
