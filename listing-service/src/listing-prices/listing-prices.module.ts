import { Module } from '@nestjs/common';
import { ListingPricesService } from './listing-prices.service';
import { ListingPricesController } from './listing-prices.controller';

@Module({
  providers: [ListingPricesService],
  controllers: [ListingPricesController]
})
export class ListingPricesModule {}
