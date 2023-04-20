import { Module } from '@nestjs/common'

import { BookstoreController } from '@/bookstore/controllers'
import { BookstoreService } from '@/bookstore/providers'

@Module({
  controllers: [BookstoreController],
  providers: [BookstoreService],
})
export class BookstoreModule {}
