import { Module } from '@nestjs/common';
import { DatabaseModule } from 'libs/database/src';
import { HotelEntity } from './entities/hotel.entity';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';

@Module({
  imports: [DatabaseModule.forFeature([HotelEntity])],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}
