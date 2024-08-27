import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ConfigModule],
})
export class AppModule {}
