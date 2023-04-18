import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name)

  intercept(_context: ExecutionContext, next: CallHandler): Observable<unknown> {
    // this.logger.verbose('Before...')

    const startTime = Date.now()

    return next.handle().pipe(
      map((data) => {
        const timeExecute = Date.now() - startTime
        // this.logger.verbose(`After... ${timeExecute}ms`)

        return { ...data, timeExecute: timeExecute / 1000 }
      }),
    )
  }
}
