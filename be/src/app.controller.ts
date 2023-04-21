import { Controller, Get, HttpStatus, Inject } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { Logger } from 'winston'

import { AppService } from './app.service'
import { ApiTag } from './shared/constants'

@Controller()
@ApiTags(ApiTag.App)
export class AppController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly appService: AppService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Hello world' })
  @ApiResponse({ status: HttpStatus.OK, description: 'OK' })
  getHello() {
    this.logger.info('Hello', {
      context: AppController.name,
      controller: AppController.name,
      action: this.getHello.name,
    })

    return { message: this.appService.getHello() }
  }
}
