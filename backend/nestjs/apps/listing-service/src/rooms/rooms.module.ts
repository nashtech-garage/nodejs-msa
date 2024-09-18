import { Module } from '@nestjs/common';
import { RoomsService } from './services/rooms.service';
import { RoomsController } from './controllers/rooms.controller';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
