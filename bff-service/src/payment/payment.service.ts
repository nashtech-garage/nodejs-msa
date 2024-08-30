import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";

@Injectable()
export class PaymentService implements OnModuleInit 
{
  constructor(@Inject('payment-client') private readonly paymentClient: ClientKafka) {}

  onModuleInit()
  {
    this.paymentClient.subscribeToResponseOf('payment.get');
    return this.paymentClient.connect();
  }

  public getPayment() 
  {
    return this.paymentClient.send('payment.get', {});
  }
}