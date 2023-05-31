import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { ListingEntity } from './entities/listing.entity';
import { UpdateListingDto } from './dto/update-listing.dto';
import { GetListingDto } from './dto/get-listing.dto';

@Injectable()
export class ListingService {
  constructor(private prisma: PrismaService) {}

  create(createListingDto: CreateListingDto) {
    return this.prisma.listing.create({ data: new ListingEntity({...createListingDto}) });
  }

  findAll(getListingDto: GetListingDto) {
    const {maxPeople} = getListingDto
    return this.prisma.listing.findMany({
    include: {
        listingPrice: true
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
      data: new ListingEntity({...updateListingDto}),
    });
  }

  remove(id: number) {
    return this.prisma.listing.delete({ where: { id } });
  }
}
