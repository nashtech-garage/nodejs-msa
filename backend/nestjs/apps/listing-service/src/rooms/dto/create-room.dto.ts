import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsInt,
  MaxLength,
} from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty()
  @IsString()
  hotel_name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  geolocation: string;

  @IsNotEmpty()
  @IsString()
  main_pic: string;

  @IsNotEmpty()
  @IsUUID(4)
  hotel_id: string;

  @IsNotEmpty()
  @IsInt()
  capacity: number;

  @IsNotEmpty()
  @IsString()
  rule: string;

  @IsNotEmpty()
  @MaxLength(1)
  status: string;
}
