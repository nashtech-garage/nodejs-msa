import { Controller, Get, Post, Body, Param, Delete, HttpCode, Put, HttpStatus } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'

import { CreateBookstoreDto, UpdateBookstoreDto } from '@/bookstore/dto'
import { BookstoreService } from '@/bookstore/providers'

@Controller('bookstore')
export class BookstoreController {
  constructor(private readonly bookstoreService: BookstoreService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: HttpStatus.CREATED, description: 'CREATED' })
  async create(@Body() createBookstoreDto: CreateBookstoreDto) {
    const result = await this.bookstoreService.create(createBookstoreDto)
    return { message: 'This action adds a new bookstore', result }
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, description: 'OK' })
  async findAll() {
    const result = await this.bookstoreService.findAll()
    return { message: 'This action returns all bookstore', result }
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, description: 'OK' })
  async findOne(@Param('id') id: string) {
    const result = await this.bookstoreService.findOne(id)
    return { message: `This action returns a #${id} bookstore`, result }
  }

  @Put(':id')
  @ApiResponse({ status: HttpStatus.OK, description: 'OK' })
  async update(@Param('id') id: string, @Body() updateBookstoreDto: UpdateBookstoreDto) {
    const result = await this.bookstoreService.update(id, updateBookstoreDto)
    return { message: `This action updates a #${id} bookstore`, result }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'NO_CONTENT' })
  async remove(@Param('id') id: string) {
    const result = await this.bookstoreService.remove(id)
    return { message: `This action removes a #${id} bookstore`, result }
  }
}
