import { Controller, Get, Inject } from '@nestjs/common'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { Logger } from 'winston'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    this.logger.info('Hello', {
      context: AppController.name,
      controller: AppController.name,
      action: this.getHello.name,
    })

    return this.appService.getHello()
  }
}
