import { faker } from '@faker-js/faker'
import { ApiProperty } from '@nestjs/swagger'
import { IsString, Length } from 'class-validator'

export class CreateBookstoreDto {
  @ApiProperty({ required: true, example: faker.commerce.productName() })
  @IsString()
  @Length(10, 100)
  name: string
}
