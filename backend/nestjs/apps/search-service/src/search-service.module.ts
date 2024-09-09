import { Module } from '@nestjs/common';
import { SearchServiceController } from './search-service.controller';
import { SearchServiceService } from './search-service.service';

@Module({
  imports: [],
  controllers: [SearchServiceController],
  providers: [SearchServiceService],
})
export class SearchServiceModule {}
