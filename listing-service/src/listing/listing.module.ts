import { Module } from '@nestjs/common';
import { PrismaModule } from '../shared/prismas/prisma.module';
import { ListingService } from './listing.service';
import { ListingController } from './listing.controller';

@Module({
  providers: [ListingService],
  controllers: [ListingController],
  imports: [PrismaModule],
})
export class ListingModule {}
