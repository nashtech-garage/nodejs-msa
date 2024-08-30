import { Module } from '@nestjs/common';
import { PrismaModule } from './shared/prisma/prisma.module';
import { ListingModule } from './listing/listing.module';
import { CategoryModule } from './categories/categories.module';
import { HealthModule } from './health/health.module';
import { LocationModule } from './location/location.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [
    PrismaModule,
    ListingModule,
    CategoryModule,
    LocationModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [ConfigModule],
})
export class AppModule {}
