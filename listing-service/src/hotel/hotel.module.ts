import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';

@Module({
  controllers: [HotelController],
  providers: [HotelService]
})
export class HotelModule {}
