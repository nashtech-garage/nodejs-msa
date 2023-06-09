import { Module } from '@nestjs/common';
import { PrismaModule } from '../shared/prismas/prisma.module';
import { CategoryController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoriesService],
  imports: [PrismaModule],
})
export class CategoryModule {}
