import { Module } from '@nestjs/common';
import { PrismaModule } from './shared/prisma/prisma.module';
import { ListingModule } from './listing/listing.module';
import { CategoryModule } from './categories/categories.module';
import { LocationController } from './location/location.controller';
import { LocationModule } from './location/location.module';
import { HealthModule } from './health/health.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [PrismaModule, ListingModule, CategoryModule, LocationModule, HealthModule],
  controllers: [LocationController],
  providers: [],
})
export class AppModule {}
