import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismas/prisma.service';
import { CreateCategoryDto } from '../dtos/create-categories.dto';
import { CategoryEntity } from '../entities/category.entity';
import { UpdateCategoryDto } from '../dtos/update-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateCategoryDto) {
    return this.prisma.category.create({ data });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: new CategoryEntity({...data}),
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
