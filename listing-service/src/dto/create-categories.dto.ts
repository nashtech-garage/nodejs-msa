import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsString()
  @MaxLength(300)
  description?: string;

  @IsString()
  @IsNotEmpty()
  firstPic: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @IsNotEmpty()
  createdBy: number;

  @IsNumber()
  @IsNotEmpty()
  updatedBy: number;
}