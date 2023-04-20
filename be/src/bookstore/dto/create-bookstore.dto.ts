import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsUUID, Length } from 'class-validator'

export class CreateBookstoreDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsUUID()
  id: string

  @ApiProperty({ required: true })
  @IsString()
  @Length(10, 100)
  name: string
}
