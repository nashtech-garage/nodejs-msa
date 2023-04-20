import { Test, TestingModule } from '@nestjs/testing'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'

import { BookstoreController } from '@/bookstore/controllers'
import { BookstoreService } from '@/bookstore/providers'

describe('BookstoreController', () => {
  let controller: BookstoreController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookstoreController],
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

    controller = module.get<BookstoreController>(BookstoreController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
