import { Module } from '@nestjs/common';
import { PrismaModule } from './shared/prisma/prisma.module';
import { LocationModule } from './location/location.module';
import { ConfigModule } from '@nestjs/config';
import { HotelModule } from './hotel/hotel.module';
import { RoomModule } from './room/room.module';
import { AmenityModule } from './amenity/amenity.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
      isGlobal: true,
    }),
    PrismaModule,
    HotelModule,
    RoomModule,
    AmenityModule,
    LocationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
