import { Module } from '@nestjs/common';
import { HotelEntity } from './entities/hotel.entity';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [DatabaseModule.forFeature([HotelEntity])],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}
