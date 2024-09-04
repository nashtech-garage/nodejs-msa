import { Module } from '@nestjs/common';
import { AmenityService } from './amenity.service';
import { AmenityController } from './amenity.controller';

@Module({
  controllers: [AmenityController],
  providers: [AmenityService]
})
export class AmenityModule {}
