import { registerAs } from '@nestjs/config'

import { LogLevel } from '@shared/constants'

export default registerAs('log', () => ({
  name: process.env.APP_NAME,
  level: process.env.LOG_LEVEL || LogLevel.Info,
  file: process.env.LOG_FILE || './logs/error.log',
}))
