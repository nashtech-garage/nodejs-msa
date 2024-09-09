import { Module } from '@nestjs/common';
import { ListingServiceController } from './listing-service.controller';
import { ListingServiceService } from './listing-service.service';

@Module({
  imports: [],
  controllers: [ListingServiceController],
  providers: [ListingServiceService],
})
export class ListingServiceModule {}
