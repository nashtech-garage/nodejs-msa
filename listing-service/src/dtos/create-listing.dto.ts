import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateCapacityDto } from './capacity.dto';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';

export class CreateListingDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(300)
  description?: string;

  @IsString()
  @IsNotEmpty()
  firstPic: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateCapacityDto)
  // capacity: Prisma.JsonValue;
  capacity: string;

  @IsNumber()
  @IsNotEmpty()
  idCategory: number;

  @IsNumber()
  @IsNotEmpty()
  createdBy: number;

  @IsNumber()
  @IsNotEmpty()
  updatedBy: number;
}
