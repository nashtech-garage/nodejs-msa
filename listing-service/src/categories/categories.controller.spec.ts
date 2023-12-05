import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { PrismaService } from '../shared/prisma/prisma.service';

describe('CategoryController', () => {
  let controller: CategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService, PrismaService],
      controllers: [CategoryController],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
