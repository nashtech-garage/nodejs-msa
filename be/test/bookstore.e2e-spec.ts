import { faker } from '@faker-js/faker'
import { HttpStatus, INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'

import { Bookstore } from '@/bookstore/entities'

import { AppModule } from '../src/app.module'

describe('BookstoreController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  let bookstore: Bookstore

  it('/bookstore (POST)', async () => {
    return await request(app.getHttpServer())
      .post('/bookstore')
      .send({ id: faker.datatype.uuid(), name: faker.commerce.productName() })
      .expect(HttpStatus.CREATED)
      .then((res) => {
        expect(res.body).toHaveProperty('message')
        expect(res.body).toHaveProperty('result')

        bookstore = res.body.result
      })
  })

  it('/bookstore (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/bookstore')
      .expect(HttpStatus.OK)
      .then((res) => {
        expect(res.body).toHaveProperty('message')
        expect(res.body).toHaveProperty('result')
      })
  })

  it('/bookstore/:id (GET)', async () => {
    return await request(app.getHttpServer())
      .get(`/bookstore/${bookstore.id}`)
      .expect(HttpStatus.OK)
      .then((res) => {
        expect(res.body).toHaveProperty('message')
        expect(res.body).toHaveProperty('result')

        expect(res.body.result.id).toEqual(bookstore.id)
        expect(res.body.result.name).toEqual(bookstore.name)
      })
  })

  it('/bookstore/:id (PUT)', async () => {
    const newName = faker.commerce.productName()
    return await request(app.getHttpServer())
      .put(`/bookstore/${bookstore.id}`)
      .send({ name: newName })
      .expect(HttpStatus.OK)
      .then((res) => {
        expect(res.body).toHaveProperty('message')
        expect(res.body).toHaveProperty('result')

        expect(res.body.result.id).toEqual(bookstore.id)
        expect(res.body.result.name).toEqual(newName)
      })
  })

  it('/bookstore/:id (DELETE)', async () => {
    return await request(app.getHttpServer())
      .delete(`/bookstore/${bookstore.id}`)
      .expect(HttpStatus.NO_CONTENT)
      .then((res) => {
        expect(res.body).toBeDefined()
        expect(res.body).toEqual({})
      })
  })
})
