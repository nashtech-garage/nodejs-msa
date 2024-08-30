import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('payment.get')
  reactToGetPayment() {
    console.log('This is reservation service reacting to "payment.get" event');
  }
}
