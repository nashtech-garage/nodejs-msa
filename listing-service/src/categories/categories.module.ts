import { Module } from '@nestjs/common';
import { CategoryController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { PrismaModule } from 'src/prismas/prisma.module';

@Module({
  controllers: [CategoryController],
  providers: [CategoriesService],
  imports: [PrismaModule],
})
export class CategoryModule {}
