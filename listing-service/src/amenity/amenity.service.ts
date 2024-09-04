import { Injectable } from '@nestjs/common';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { UpdateAmenityDto } from './dto/update-amenity.dto';

@Injectable()
export class AmenityService {
  create(createAmenityDto: CreateAmenityDto) {
    return 'This action adds a new amenity';
  }

  findAll() {
    return `This action returns all amenity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} amenity`;
  }

  update(id: number, updateAmenityDto: UpdateAmenityDto) {
    return `This action updates a #${id} amenity`;
  }

  remove(id: number) {
    return `This action removes a #${id} amenity`;
  }
}
