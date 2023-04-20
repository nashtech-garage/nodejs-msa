import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import * as configurations from '@/config/index'
import { SharedModule } from '@/shared/shared.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BookstoreModule } from './bookstore/bookstore.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      expandVariables: true,
      envFilePath: ['.env.local', '.env.prod', '.env'],
      load: Object.values(configurations),
    }),
    SharedModule,
    BookstoreModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
