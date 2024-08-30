import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PAYMENT_SERVICE_PORT || 8003;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT);
  console.log('Payment Service is listening on port ', PORT);
}
bootstrap();
