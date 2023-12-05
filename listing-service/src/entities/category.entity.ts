import { Category } from '@prisma/client';

export class CategoryEntity implements Category {
  constructor(partial: Partial<CategoryEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
  id: number;
  name: string;
  description: string;
  firstPic: string;
  createdAt: Date;
  createdBy: number;
  updatedAt: Date;
  updatedBy: number;
}
