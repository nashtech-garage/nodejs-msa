import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { WinstonModule } from 'nest-winston'

import * as providers from '@shared/providers'

@Global()
@Module({
  imports: [
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      useClass: providers.WinstonConfigService,
    }),
  ],
  providers: Object.values(providers),
  exports: Object.values(providers),
})
export class SharedModule {}
