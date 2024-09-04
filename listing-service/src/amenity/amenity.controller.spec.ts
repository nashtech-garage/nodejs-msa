import { Test, TestingModule } from '@nestjs/testing';
import { AmenityController } from './amenity.controller';
import { AmenityService } from './amenity.service';

describe('AmenityController', () => {
  let controller: AmenityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmenityController],
      providers: [AmenityService],
    }).compile();

    controller = module.get<AmenityController>(AmenityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
