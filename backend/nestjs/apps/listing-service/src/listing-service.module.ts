import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './database/data-source';
import { HotelsModule } from './hotels/hotels.module';
import { DatabaseModule } from '@app/database';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
    }),
    DatabaseModule.forRoot(dataSourceOptions),
    HotelsModule,
    RoomsModule,
  ],
})
export class ListingServiceModule {}
