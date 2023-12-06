// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Create dummy data
  // Location
  const hochiminh = await prisma.location.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Ho Chi Minh",
      description: "Ho Chi Minh City",
      firstPic: "images/hochiminh.png",
      createdBy: 1,
      updatedBy: 1,
    },
  });

  const danang = await prisma.location.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Da Nang",
      description: "Da Nang",
      firstPic: "images/danang.png",
      createdBy: 1,
      updatedBy: 1,
    },
  });

  const hanoi = await prisma.location.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: "Ha Noi",
      description: "Ha Noi",
      firstPic: "images/hanoi.png",
      createdBy: 1,
      updatedBy: 1,
    },
  });

  const hue = await prisma.location.upsert({
    where: { id: 4 },
    update: {},
    create: {
      name: "Hue",
      description: "Hue",
      firstPic: "images/hue.png",
      createdBy: 1,
      updatedBy: 1,
    },
  });

  const hoian = await prisma.location.upsert({
    where: { id: 5 },
    update: {},
    create: {
      name: "Hoi An",
      description: "Hoi An",
      firstPic: "images/hoian.png",
      createdBy: 1,
      updatedBy: 1,
    },
  });

  const ninhbinh = await prisma.location.upsert({
    where: { id: 6 },
    update: {},
    create: {
      name: "Ninh Binh",
      description: "Ninh Binh",
      firstPic: "images/ninhbinh.png",
      createdBy: 1,
      updatedBy: 1,
      createdAt: new Date(Date.UTC(2023,0,12))
    },
  });

  // We can use create Many to create bulk

  // const test = await prisma.location.createMany({
  //   data: [{
  //     name: "Hue",
  //     description: "Co Do Hue",
  //     firstPic: "images/hue.png",
  //     createdBy: 1,
  //     updatedBy: 1,
  //   }, {
  //     name: "Hoi An",
  //     description: "Hoi An",
  //     firstPic: "images/hoian.png",
  //     createdBy: 1,
  //     updatedBy: 1,
  //   }, {
  //     name: "Ninh Binh",
  //     description: "Ninh Binh",
  //     firstPic: "images/ninhbinh.png",
  //     createdBy: 1,
  //     updatedBy: 1,
  //   }]
  // })

  // Amenity

  // Property_image

  // Hotel
  await prisma.hotel.upsert({
    where: { id: 1},
    update: {},
    create: {
      hotelName: "Eastin Grand Hotel Saigon",
      description: "The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Phú Nhuận part of Ho Chi Minh City, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous War Remnants Museum. Rated with 5 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site.",
      geolocation: "123,456",
      mainPic: "images/eastin-grand-hotel-saigon.png",
      address: "253 Nguyen Van Troi Street, Phu Nhuan District , Phú Nhuận, Ho Chi Minh City, Vietnam",
      city: "Ho Chi Minh",
      locationId: 1,
      createdBy: 1,
      updatedBy: 1,
    }
  });

  await prisma.hotel.upsert({
    where: { id: 2},
    update: {},
    create: {
      hotelName: "Cozrum Homes - Sonata Residence",
      description: "Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Conveniently situated in the District 7 part of Ho Chi Minh City, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous War Remnants Museum. Rated with 4 stars, this high-quality property provides guests with access to spa and outdoor pool on-site.",
      geolocation: "123,456",
      mainPic: "images/cozrum-homes-sonata-residence.png",
      address: "41 Nguyễn Thị Thập, Phường Tân Phú, Quận 7, District 7, Ho Chi Minh City, Vietnam",
      city: "Ho Chi Minh",
      locationId: 1,
      createdBy: 1,
      updatedBy: 1,
    }
  });

  await prisma.hotel.upsert({
    where: { id: 3},
    update: {},
    create: {
      hotelName: "Tan Son Nhat Saigon Hotel",
      description: "The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Phú Nhuận part of Ho Chi Minh City, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous War Remnants Museum. Rated with 5 stars, this high-quality property provides guests with access to massage, restaurant and hot tub on-site.",
      geolocation: "123,456",
      mainPic: "images/tan-son-nhat-saigon-hotel.png",
      address: "202 Hoang Van Thu Street, Phu Nhuan Dist, Phú Nhuận, Ho Chi Minh City, Vietnam, 70000",
      city: "Ho Chi Minh",
      locationId: 1,
      createdBy: 1,
      updatedBy: 1,
    }
  });

  await prisma.hotel.upsert({
    where: { id: 4},
    update: {},
    create: {
      hotelName: "Eden Star Saigon Hotel",
      description: "The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Strategically situated in District 1, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous War Remnants Museum. Rated with 4.5 stars, this high-quality property provides guests with access to massage, restaurant and hot tub on-site.",
      geolocation: "123,456",
      mainPic: "images/eden-star-saigon-hotel.png",
      address: "38 Bui Thi Xuan Street, Ben Thanh Ward, District 1, District 1, Ho Chi Minh City, Vietnam",
      city: "Ho Chi Minh",
      locationId: 1,
      createdBy: 1,
      updatedBy: 1,
    }
  });
  // Room

  // Room amentity



  // // create dummy category
  // const category1 = await prisma.category.upsert({
  //   where: { id: -1 },
  //   update: {},
  //   create: {
  //     name: 'category1',
  //     description: 'We are excited to share that category1',
  //     firstPic: 'firstPic',
  //     createdBy: 0,
  //     updatedBy: 0,
  //   },
  // });

  // const category2 = await prisma.category.upsert({
  //   where: { id: -1 },
  //   update: {},
  //   create: {
  //     name: 'category2',
  //     description: 'We are excited to share that category2',
  //     firstPic: 'firstPic',
  //     createdBy: 1,
  //     updatedBy: 1,
  //   },
  // });

  // // create dummy listing
  // const listing1 = await prisma.listing.upsert({
  //   where: { id: -1 },
  //   update: {},
  //   create: {
  //     name: 'listing1',
  //     description: 'We are excited to share that listing1',
  //     firstPic: 'firstPic',
  //     categoryId: 1,
  //     capacity: {
  //       guest: 2,
  //       room: 1,
  //       bed: 1
  //     },
  //     createdBy: 1,
  //     updatedBy: 1,
  //   },
  // });

  // const listing2 = await prisma.listing.upsert({
  //   where: { id: -1 },
  //   update: {},
  //   create: {
  //     name: 'listing2',
  //     description: 'We are excited to share that listing2',
  //     firstPic: 'firstPic',
  //     categoryId: 1,
  //     capacity: {
  //       guest: 2,
  //       room: 1,
  //       bed: 1
  //     },
  //     createdBy: 0,
  //     updatedBy: 1,
  //   },
  // });


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
