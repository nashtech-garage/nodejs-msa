import { Test, TestingModule } from '@nestjs/testing';
import { ListingService } from './listing.service';
import { PrismaService } from '../shared/prisma/prisma.service';

describe('ListingService', () => {
  let service: ListingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListingService, PrismaService],
    }).compile();

    service = module.get<ListingService>(ListingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
