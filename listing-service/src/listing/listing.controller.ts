import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
    Query,
} from '@nestjs/common';
import { CreateListingDto } from '../dto/create-listing.dto';
import { ListingService } from './listing.service';
import { UpdateListingDto } from '../dto/update-listing.dto';
import { GetListingDto } from '../dto/get-listing.dto';
import { ListingEntity } from 'src/entities/listing.entity';


@Controller('listing')
export class ListingController {
    constructor(private readonly listingService: ListingService) {}

  @Post()
  async create(@Body() createListingDto: CreateListingDto) {
    return new ListingEntity(
      await this.listingService.create(createListingDto),
    );
  }

  @Get()
  async findAll() {
    return this.listingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.listingService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateListingDto: UpdateListingDto,
  ) {
    return await this.listingService.update(id, updateListingDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.listingService.remove(id);
  }
}
