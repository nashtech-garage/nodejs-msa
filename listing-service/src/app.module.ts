import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ListingModule } from './listing/listing.module';
import { CategoryModule } from './categories/categories.module';
import { ListingPricesModule } from './listing-prices/listing-prices.module';
import { ListingEntity } from './entities/listing.entity';

@Module({
  imports: [PrismaModule, ListingModule, CategoryModule, ListingPricesModule, ListingEntity],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
