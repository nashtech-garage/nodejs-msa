import { Injectable } from '@nestjs/common';

@Injectable()
export class ListingServiceService {
  getHello(): string {
    return 'Listing Hello World!';
  }
}
