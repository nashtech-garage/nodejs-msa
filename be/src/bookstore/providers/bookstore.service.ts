import { faker } from '@faker-js/faker'
import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { v4 as uuidV4 } from 'uuid'
import { Logger } from 'winston'

import { CreateBookstoreDto, UpdateBookstoreDto } from '@/bookstore/dto'
import { Bookstore } from '@/bookstore/entities'

const bookstore = new Bookstore()

bookstore.id = 'd830bdf7-e1b2-4147-b9d7-a78f1cbceae0'
bookstore.name = faker.commerce.productName()

let bookstores: Bookstore[] = [bookstore]
for (let index = 0; index < 10; index++) {
  const bookstore = new Bookstore()

  bookstore.id = faker.datatype.uuid()
  bookstore.name = faker.commerce.productName()

  bookstores.push(bookstore)
}

@Injectable()
export class BookstoreService {
  constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}

  async create({ name }: CreateBookstoreDto) {
    this.logger.info('Create bookstore', { context: BookstoreService.name })
    const bookstore = new Bookstore()
    bookstore.id = uuidV4()
    bookstore.name = name

    bookstores.push(bookstore)

    return await Promise.resolve(bookstore)
  }

  async findAll() {
    this.logger.info('Find bookstores', { context: BookstoreService.name })
    return { meta: { totalItems: bookstores.length }, items: await Promise.resolve(bookstores) }
  }

  async findOne(id: string) {
    this.logger.info('Find bookstore', { context: BookstoreService.name, id })
    const bookstore = bookstores.find((b) => b.id === id)
    if (!bookstore) {
      this.logger.warn('Not found bookstore', { context: BookstoreService.name, id })
      throw new NotFoundException(`Not found bookstore ${id}`)
    }

    return await Promise.resolve(bookstore)
  }

  async update(id: string, { name }: UpdateBookstoreDto) {
    this.logger.info('Update bookstore', { context: BookstoreService.name, id, name })
    const bookstore = await this.findOne(id)
    bookstore.name = name

    bookstores = bookstores.filter((b) => b.id !== bookstore.id)
    bookstores.push(bookstore)

    return await Promise.resolve(bookstore)
  }

  async remove(id: string) {
    this.logger.info('Remove bookstore', { context: BookstoreService.name, id })
    await this.findOne(id)

    bookstores = bookstores.filter((b) => b.id !== id)

    return await Promise.resolve()
  }
}
