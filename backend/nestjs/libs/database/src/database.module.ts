import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { DataSourceOptions } from 'typeorm';

@Module({})
export class DatabaseModule {
  public static forRoot(dataSourceOptions: DataSourceOptions): DynamicModule {
    return TypeOrmModule.forRoot(dataSourceOptions);
  }

  public static forFeature(entities: EntityClassOrSchema[]): DynamicModule {
    return TypeOrmModule.forFeature(entities);
  }
}