import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
  export class GetListingDto {
    @IsNumber()
    @IsOptional()
    maxPeople: number;
  
  }