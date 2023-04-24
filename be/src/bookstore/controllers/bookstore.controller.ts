import { Controller, Get, Post, Body, Param, Delete, HttpCode, Put, HttpStatus } from '@nestjs/common'
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { v4 as uuidV4 } from 'uuid'

import { CreateBookstoreDto, UpdateBookstoreDto } from '@/bookstore/dto'
import { BookstoreService } from '@/bookstore/providers'
import { ApiTag } from '@/shared/constants'

@Controller('bookstore')
@ApiTags(ApiTag.Bookstore)
export class BookstoreController {
  constructor(private readonly bookstoreService: BookstoreService) {}

  @Post()
  @ApiOperation({ summary: 'Create new bookstore' })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: HttpStatus.CREATED, description: 'This action adds a new bookstore' })
  async create(@Body() createBookstoreDto: CreateBookstoreDto) {
    const result = await this.bookstoreService.create(createBookstoreDto)
    return { message: 'This action adds a new bookstore', result }
  }

  @Get()
  @ApiOperation({ summary: 'Get all bookstores' })
  @ApiResponse({ status: HttpStatus.OK, description: 'This action returns all bookstore' })
  async findAll() {
    const result = await this.bookstoreService.findAll()
    return { message: 'This action returns all bookstore', result }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get bookstore' })
  @ApiParam({ name: 'id', example: uuidV4() })
  @ApiResponse({ status: HttpStatus.OK, description: 'This action returns a bookstore' })
  async findOne(@Param('id') id: string) {
    const result = await this.bookstoreService.findOne(id)
    return { message: `This action returns a #${id} bookstore`, result }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update bookstore' })
  @ApiParam({ name: 'id', example: uuidV4() })
  @ApiResponse({ status: HttpStatus.OK, description: 'This action updates a bookstore' })
  async update(@Param('id') id: string, @Body() updateBookstoreDto: UpdateBookstoreDto) {
    const result = await this.bookstoreService.update(id, updateBookstoreDto)
    return { message: `This action updates a #${id} bookstore`, result }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete bookstore' })
  @ApiParam({ name: 'id', example: uuidV4() })
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'This action removes a bookstore' })
  async remove(@Param('id') id: string) {
    const result = await this.bookstoreService.remove(id)
    return { message: `This action removes a #${id} bookstore`, result }
  }
}
