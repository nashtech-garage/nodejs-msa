import { Module } from '@nestjs/common';
import { PrismaModule } from './shared/prisma/prisma.module';
import { ListingModule } from './listing/listing.module';
import { CategoryModule } from './categories/categories.module';

@Module({
  imports: [PrismaModule, ListingModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
