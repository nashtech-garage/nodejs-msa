import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateListingDto } from '../dto/update-listing.dto';
import { GetListingDto } from '../dto/get-listing.dto';
import { CreateListingDto } from 'src/dto/create-listing.dto';
import { Listing, Prisma } from "@prisma/client";
@Injectable()
export class ListingService {
  constructor(private prisma: PrismaService) {}

  create(createListingDto: CreateListingDto) {
    const {idCategory, ...createListingData} = createListingDto
    return this.prisma.listing.create({ data:  {
      ...createListingData,
      category:{
        connect: {
          id: idCategory,
        },  
      }
    }});
  }

  findAll() {
    return this.prisma.listing.findMany({
    include: {
        listingPrice: true,
        category: true
    },
    where: {
        
    }
    });
  }

  findOne(id: number) {
    return this.prisma.listing.findUnique({ where: { id } });
  }

  update(id: number, updateListingDto: UpdateListingDto) {
    return this.prisma.listing.update({
      where: { id },
      data: updateListingDto,
    });
  }

  remove(id: number) {
    return this.prisma.listing.delete({ where: { id } });
  }
}
