import { Controller, Get } from '@nestjs/common';
import { ReservationServiceService } from './reservation-service.service';

@Controller()
export class ReservationServiceController {
  constructor(private readonly reservationServiceService: ReservationServiceService) {}

  @Get()
  getHello(): string {
    return this.reservationServiceService.getHello();
  }
}
