import { Module } from '@nestjs/common';
import { BffServiceController } from './bff-service.controller';
import { BffServiceService } from './bff-service.service';

@Module({
  imports: [],
  controllers: [BffServiceController],
  providers: [BffServiceService],
})
export class BffServiceModule {}
