import { Module } from '@nestjs/common';
import { ListingService } from './listing.service';
import { ListingController } from './listing.controller';
import { PrismaModule } from 'src/prismas/prisma.module';

@Module({
  providers: [ListingService],
  controllers: [ListingController],
  imports: [PrismaModule],
})
export class ListingModule {}
