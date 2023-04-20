import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { utilities, WinstonModuleOptions, WinstonModuleOptionsFactory } from 'nest-winston'
import { format as _format, transports as _transports } from 'winston'

import logConfig from '@config/log.config'
import { LogLevel } from '@shared/constants'

@Injectable()
export class WinstonConfigService implements WinstonModuleOptionsFactory {
  constructor(@Inject(logConfig.KEY) private config: ConfigType<typeof logConfig>) {}

  createWinstonModuleOptions(): WinstonModuleOptions {
    return {
      level: this.config.level,
      exitOnError: false,
      format: _format.combine(
        _format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        _format.ms(),
        _format.align(),
        _format.json(),
        utilities.format.nestLike(this.config.name, { colors: true, prettyPrint: true }),
      ),
      transports: [
        new _transports.Console(),
        new _transports.File({
          filename: this.config.file,
          level: LogLevel.Error,
        }),
      ],
    }
  }
}
