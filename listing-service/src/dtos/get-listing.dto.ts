import { IsNumber, IsOptional } from 'class-validator';

export class GetListingDto {
  @IsNumber()
  @IsOptional()
  maxPeople: number;
}
