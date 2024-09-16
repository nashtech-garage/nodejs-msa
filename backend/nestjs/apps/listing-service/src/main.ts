import { NestFactory } from '@nestjs/core';
import { ListingServiceModule } from './listing-service.module';

async function bootstrap() {
  const app = await NestFactory.create(ListingServiceModule);
  await app.listen(3000);
}
bootstrap();
