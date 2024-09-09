import { Controller, Get } from '@nestjs/common';
import { BffServiceService } from './bff-service.service';

@Controller()
export class BffServiceController {
  constructor(private readonly bffServiceService: BffServiceService) {}

  @Get()
  getHello(): string {
    return this.bffServiceService.getHello();
  }
}
