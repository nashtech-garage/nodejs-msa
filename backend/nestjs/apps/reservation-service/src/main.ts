import { NestFactory } from '@nestjs/core';
import { ReservationServiceModule } from './reservation-service.module';

async function bootstrap() {
  const app = await NestFactory.create(ReservationServiceModule);
  await app.listen(3000);
}
bootstrap();
