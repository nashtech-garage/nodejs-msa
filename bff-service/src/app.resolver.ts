import { AppService } from './app.service';
import { Resolver, Query } from '@nestjs/graphql';
import { Test } from '@nestjs/testing';

@Resolver(() => Test)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  getHello(): string {
    return this.appService.getHello();
  }
}
