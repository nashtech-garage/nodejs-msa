import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { moment, parseErrorStack } from '@shared/utils'

import type { Request, Response } from 'express'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name)
  protected readonly configService?: ConfigService

  constructor(configService?: ConfigService) {
    this.configService = configService
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest<Request>()
    const response = ctx.getResponse<Response>()

    const status = this.generateStatus(exception)
    const msgErr = this.generateMsgErr(exception)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let detail: any = {
      path: request.url,
      timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
      statusCode: status,
      ...this.generateExceptionExtra(exception),
    }

    detail = this.generateExceptionDetail(exception)

    if (status >= 500) {
      const stack = parseErrorStack(exception && exception.stack ? exception.stack : undefined)
      this.logger.error(msgErr, {
        ...detail,
        stack,
      })
    }

    response.status(status).json({
      isSuccess: false,
      message: msgErr,
      detail,
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private generateStatus(exception: any) {
    return exception?.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private generateMsgErr(exception: any) {
    return exception?.message ? exception.message : 'Internal server error'
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private generateExceptionExtra(exception: any) {
    this.logger.warn('Implementing', { context: AllExceptionsFilter.name, exception })
    return {}
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private generateExceptionDetail(exception: any) {
    let detail

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
