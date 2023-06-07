import {
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateCapacityDto {
  @IsNumber()
  @IsNotEmpty()
  gest: number;

  @IsNumber()
  @IsNotEmpty()
  room: number;

  @IsNumber()
  @IsNotEmpty()
  bed: number;
}