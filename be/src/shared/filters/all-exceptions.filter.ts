import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { moment, parseErrorStack } from '@/shared/utils'

import type { Request, Response } from 'express'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnknownException = any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnknownDetail = any

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name)
  protected readonly configService?: ConfigService

  constructor(configService?: ConfigService) {
    this.configService = configService
  }

  catch(exception: UnknownException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest<Request>()
    const response = ctx.getResponse<Response>()

    const status = this.generateStatus(exception)
    const msgErr = this.generateMsgErr(exception)

    let detail: UnknownDetail = {
      path: request.url,
      timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
      statusCode: status,
      ...this.generateExceptionExtra(exception),
    }

    detail = this.generateExceptionDetail(detail, exception)

    if (status >= 500) {
      const stack = parseErrorStack(exception && exception.stack ? exception.stack : undefined)
      this.logger.error(msgErr, {
        ...detail,
        stack,
      })
    }

    response.status(status).json({
      message: msgErr,
      detail,
    })
  }

  private generateStatus(exception: UnknownException) {
    return exception?.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
  }

  private generateMsgErr(exception: UnknownException) {
    return exception?.message ? exception.message : 'Internal server error'
  }

  private generateExceptionExtra(exception: UnknownException) {
    this.logger.warn('Implementing', { context: AllExceptionsFilter.name, exception })
    return {}
  }

  private generateExceptionDetail(detail: UnknownDetail, exception: UnknownException) {
    if (exception && exception.getResponse) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { message, statusCode, ...args } = exception.getResponse()
      if (args && Object.keys(args).length > 0) {
        detail = { ...detail, ...args }
      }

      if (Array.isArray(message) && message.length > 0) {
        detail = { ...detail, message }
      }
    }

    return detail
  }
}
