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
      createdBy: 0,
      updatedBy: 0,
    },
  });

  const category2 = await prisma.category.upsert({
    where: { id: -1 },
    update: {},
    create: {
      name: 'category2',
      description: 'We are excited to share that category2',
      firstPic: 'firstPic',
      createdBy: 1,
      updatedBy: 1,
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
      categoryId: 1,
      capacity: {
        guest: 2,
        room: 1,
        bed: 1
      },
      createdBy: 1,
      updatedBy: 1,
    },
  });

  const listing2 = await prisma.listing.upsert({
    where: { id: -1 },
    update: {},
    create: {
      name: 'listing2',
      description: 'We are excited to share that listing2',
      firstPic: 'firstPic',
      categoryId: 1,
      capacity: {
        guest: 2,
        room: 1,
        bed: 1
      },
      createdBy: 0,
      updatedBy: 1,
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
