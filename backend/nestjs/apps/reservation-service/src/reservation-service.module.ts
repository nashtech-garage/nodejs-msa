import { Module } from '@nestjs/common';
import { ReservationServiceController } from './reservation-service.controller';
import { ReservationServiceService } from './reservation-service.service';

@Module({
  imports: [],
  controllers: [ReservationServiceController],
  providers: [ReservationServiceService],
})
export class ReservationServiceModule {}
