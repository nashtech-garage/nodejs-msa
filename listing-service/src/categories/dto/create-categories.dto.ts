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
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(300)
  @ApiProperty({ required: false })
  description?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstPic: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  category: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ required: false, default: 1 })
  createdBy: number;
}