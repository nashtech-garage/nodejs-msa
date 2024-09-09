import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
