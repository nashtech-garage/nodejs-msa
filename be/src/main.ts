import { HttpStatus, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { Environment } from '@/shared/constants'
import { AllExceptionsFilter } from '@/shared/filters'
import { AuthInterceptor, LoggingInterceptor } from '@/shared/interceptors'

import { AppModule } from './app.module'

import type { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  const configService = app.get<ConfigService>(ConfigService)

  app.disable('x-powered-by')
  app.enableCors()
  app.useGlobalFilters(new AllExceptionsFilter(configService))
  app.useGlobalInterceptors(new AuthInterceptor())
  app.useGlobalInterceptors(new LoggingInterceptor())

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      enableDebugMessages: process.env.NODE_ENV !== Environment.Production,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true,
      validationError: {
        target: true,
        value: true,
      },
      whitelist: true,
    }),
  )

  await app.listen(configService.get('PORT'))
  console.log(`✅ Application is 🏃‍♂️ on: ${await app.getUrl()} - ${configService.get('NODE_ENV')}`)
}
bootstrap()
