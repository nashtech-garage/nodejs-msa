// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create dummy category
  const category1 = await prisma.category.upsert({
    where: { id: -1 },
    update: {},
    create: {
      name: 'category1',
      description: 'We are excited to share that category1',
      firstPic: 'firstPic',
      category: '',
      createdBy: 0,
    },
  });

  const category2 = await prisma.category.upsert({
    where: { id: -1 },
    update: {},
    create: {
      name: 'category2',
      description: 'We are excited to share that category2',
      firstPic: 'firstPic',
      category: '',
      createdBy: 0,
    },
  });

  // create dummy listing
  const listing1 = await prisma.listing.upsert({
    where: { id: -1 },
    update: {},
    create: {
      name: 'listing1',
      description: 'We are excited to share that listing1',
      firstPic: 'firstPic',
      idCategory: 1,
      createdBy: 0,
    },
  });

  const listing2 = await prisma.listing.upsert({
    where: { id: -1 },
    update: {},
    create: {
      name: 'listing2',
      description: 'We are excited to share that listing2',
      firstPic: 'firstPic',
      idCategory: 1,
      createdBy: 0,
    },
  });

  const listing3 = await prisma.listing.upsert({
    where: { id: -1 },
    update: {},
    create: {
      name: 'listing3',
      description: 'We are excited to share that listing3',
      firstPic: 'firstPic',
      idCategory: 1,
      createdBy: 0,
    },
  });

  // create dummy listingPrice
  const listingPrice1 = await prisma.listingPrice.upsert({
    where: { id: -1 },
    update: {},
    create: {
      name: 'price',
      price: 100000,
      listingId: 1,
      createdBy: 0,
    },
  });

  const listingPrice2 = await prisma.listingPrice.upsert({
    where: { id: -1 },
    update: {},
    create: {
      name: 'price',
      price: 150000,
      listingId: 2,
      createdBy: 0,
    },
  });

  const listingPrice3 = await prisma.listingPrice.upsert({
    where: { id: -1 },
    update: {},
    create: {
      name: 'price',
      price: 200000,
      listingId: 3,
      createdBy: 0,
    },
  });

}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
