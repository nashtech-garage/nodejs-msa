import { PartialType } from '@nestjs/mapped-types'

import { CreateBookstoreDto } from './create-bookstore.dto'

export class UpdateBookstoreDto extends PartialType(CreateBookstoreDto) {}
