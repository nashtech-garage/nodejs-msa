import { Test, TestingModule } from '@nestjs/testing';
import { AmenityService } from './amenity.service';

describe('AmenityService', () => {
  let service: AmenityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmenityService],
    }).compile();

    service = module.get<AmenityService>(AmenityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
