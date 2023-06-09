import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ListingModule } from './listing/listing.module';
import { CategoryModule } from './categories/categories.module';

@Module({
  imports: [PrismaModule, ListingModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
