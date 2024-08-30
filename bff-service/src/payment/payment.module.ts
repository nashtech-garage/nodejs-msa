import { Module } from "@nestjs/common";
import { ClientsModule, Transport} from "@nestjs/microservices"
import { PaymentController } from "./payment.controller";
import { PaymentService } from "./payment.service";

@Module({
  imports: [
    ClientsModule.registerAsync([{
        name: 'payment-client',
        useFactory: () => ({
          transport: Transport.KAFKA,
          options: {
            client: {
              brokers: [process.env.KAFKA_BROKER],
              connectionTimeout: 100000,
              retry: {
                retries: Number.MAX_SAFE_INTEGER
              },
            },
          }
        })
      }
    ])
  ],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}