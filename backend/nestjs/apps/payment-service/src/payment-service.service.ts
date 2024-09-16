import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
