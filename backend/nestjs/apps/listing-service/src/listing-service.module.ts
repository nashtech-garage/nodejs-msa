import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './database/data-source';
import { ListingServiceController } from './listing-service.controller';
import { ListingServiceService } from './listing-service.service';
import { HotelsModule } from './hotels/hotels.module';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
    }),
    DatabaseModule.forRoot(dataSourceOptions),
    HotelsModule,
  ],
  controllers: [ListingServiceController],
  providers: [ListingServiceService],
})
export class ListingServiceModule {}
