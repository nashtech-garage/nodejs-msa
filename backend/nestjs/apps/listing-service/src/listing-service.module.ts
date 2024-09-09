import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ListingServiceController } from './listing-service.controller';
import { ListingServiceService } from './listing-service.service';
import { HotelsModule } from './hotels/hotels.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    HotelsModule,
  ],
  controllers: [ListingServiceController],
  providers: [ListingServiceService],
})
export class ListingServiceModule {}
