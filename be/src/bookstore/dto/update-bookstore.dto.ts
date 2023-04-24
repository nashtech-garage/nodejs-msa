import { faker } from '@faker-js/faker'
import { PartialType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'
import { IsString, Length } from 'class-validator'

import { CreateBookstoreDto } from './create-bookstore.dto'

export class UpdateBookstoreDto extends PartialType(CreateBookstoreDto) {
  @ApiProperty({ required: true, example: faker.commerce.productName() })
  @IsString()
  @Length(10, 100)
  name: string
}
