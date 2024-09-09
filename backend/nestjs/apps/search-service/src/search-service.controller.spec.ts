import { Test, TestingModule } from '@nestjs/testing';
import { SearchServiceController } from './search-service.controller';
import { SearchServiceService } from './search-service.service';

describe('SearchServiceController', () => {
  let searchServiceController: SearchServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SearchServiceController],
      providers: [SearchServiceService],
    }).compile();

    searchServiceController = app.get<SearchServiceController>(SearchServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(searchServiceController.getHello()).toBe('Hello World!');
    });
  });
});
