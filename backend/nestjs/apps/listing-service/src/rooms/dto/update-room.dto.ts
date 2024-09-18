import {
  IsOptional,
  IsString,
  IsUUID,
  IsInt,
  MaxLength,
} from 'class-validator';

export class UpdateRoomDto {
  @IsOptional()
  @IsString()
  hotel_name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  geolocation?: string;

  @IsOptional()
  @IsString()
  main_pic?: string;

  @IsOptional()
  @IsUUID(4)
  hotel_id?: string;

  @IsOptional()
  @IsInt()
  capacity?: number;

  @IsOptional()
  @IsString()
  rule?: string;

  @IsOptional()
  @MaxLength(1)
  status?: string;
}
