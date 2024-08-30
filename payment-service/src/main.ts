import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

dotenv.config();
const PORT = process.env.PAYMENT_SERVICE_PORT || 8003;

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);

  // await app.listen(PORT);
  // console.log('Payment Service is listening on port ', PORT);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_BROKER],
        connectionTimeout: 100000,
        retry: {
          retries: Number.MAX_SAFE_INTEGER
        },
      },
      consumer: {
        groupId: process.env.KAFKA_CONSUMER_GROUP_ID,
      }
    }
  })

  await app.listen();
}
bootstrap();
