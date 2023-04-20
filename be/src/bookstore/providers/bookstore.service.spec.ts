import { Test, TestingModule } from '@nestjs/testing'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'

import { BookstoreService } from './bookstore.service'

describe('BookstoreService', () => {
  let service: BookstoreService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: WINSTON_MODULE_PROVIDER,
          useFactory: () => ({
            info: jest.fn(),
            warn: jest.fn(),
          }),
        },
        BookstoreService,
      ],
    }).compile()

    service = module.get<BookstoreService>(BookstoreService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
