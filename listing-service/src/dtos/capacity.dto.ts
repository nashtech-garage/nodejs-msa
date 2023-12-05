import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCapacityDto {
  @IsNumber()
  @IsNotEmpty()
  guest: number;

  @IsNumber()
  @IsNotEmpty()
  room: number;

  @IsNumber()
  @IsNotEmpty()
  bed: number;
}
