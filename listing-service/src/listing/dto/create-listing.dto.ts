// import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateListingDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
//   @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(300)
//   @ApiProperty({ required: false })
  description?: string;

  @IsString()
  @IsNotEmpty()
//   @ApiProperty()
  firstPic: string;

  @IsNumber()
  @IsNotEmpty()
//   @ApiProperty({ required: false, default: 2 })
  maxPeople: number;

  @IsNumber()
  @IsNotEmpty()
//   @ApiProperty({ required: true})
  idCategory: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
//   @ApiProperty({ required: false, default: 1 })
  createdBy: number;
}