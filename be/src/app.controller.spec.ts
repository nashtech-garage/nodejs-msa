import { Test, TestingModule } from '@nestjs/testing'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'

import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: WINSTON_MODULE_PROVIDER,
          useFactory: () => ({
            info: jest.fn(),
          }),
        },
        AppService,
      ],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })
  })
})
