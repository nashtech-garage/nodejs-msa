import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prismas/prisma.module';
import { ListingModule } from './listings/listing.module';
import { CategoryModule } from './categories/categories.module';

@Module({
  imports: [PrismaModule, ListingModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
