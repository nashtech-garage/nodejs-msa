import { NestFactory } from '@nestjs/core';
import { BffServiceModule } from './bff-service.module';

async function bootstrap() {
  const app = await NestFactory.create(BffServiceModule);
  await app.listen(3000);
}
bootstrap();
