import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getPayment() {
    return "Payment Service is working";
  }
}
