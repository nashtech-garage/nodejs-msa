import { Test, TestingModule } from '@nestjs/testing'

import { BookstoreService } from './bookstore.service'

describe('BookstoreService', () => {
  let service: BookstoreService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookstoreService],
    }).compile()

    service = module.get<BookstoreService>(BookstoreService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
