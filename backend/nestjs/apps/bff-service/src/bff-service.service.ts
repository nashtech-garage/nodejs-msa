import { Injectable } from '@nestjs/common';

@Injectable()
export class BffServiceService {
  getHello(): string {
    return 'BFF Change 2 Hello World!';
  }
}
