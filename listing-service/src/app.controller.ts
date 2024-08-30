import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class AppController {
  @EventPattern('payment.get')
  reactToGetPayment() {
    console.log('This is listing service reacting to "payment.get" event');
  }
}