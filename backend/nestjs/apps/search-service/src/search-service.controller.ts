import { Controller, Get } from '@nestjs/common';
import { SearchServiceService } from './search-service.service';

@Controller()
export class SearchServiceController {
  constructor(private readonly searchServiceService: SearchServiceService) {}

  @Get()
  getHello(): string {
    return this.searchServiceService.getHello();
  }
}
