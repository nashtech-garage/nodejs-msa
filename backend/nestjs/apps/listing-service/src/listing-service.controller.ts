import { Controller, Get } from '@nestjs/common';
import { ListingServiceService } from './listing-service.service';

@Controller()
export class ListingServiceController {
  constructor(private readonly listingServiceService: ListingServiceService) {}

  @Get()
  getHello(): string {
    return this.listingServiceService.getHello();
  }
}
