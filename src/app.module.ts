import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import * as configurations from '@config'
import { SharedModule } from '@shared/shared.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      expandVariables: true,
      envFilePath: ['.env.local', '.env.production', '.env'],
      load: Object.values(configurations),
    }),
    SharedModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
