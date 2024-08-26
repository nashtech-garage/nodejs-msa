CREATE TABLE "Location" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL,
	"description" TEXT NOT NULL,
	"firstPic" varchar NOT NULL,
	"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"createdBy" integer NOT NULL,
	"updatedAt" DATE NOT NULL,
	"updatedBy" integer NOT NULL,
	CONSTRAINT "Location_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Room" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL,
	"description" TEXT NOT NULL,
	"mainPic" varchar NOT NULL,
	"hotelId" integer NOT NULL,
	"capacity" json NOT NULL,
	"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"createdBy" integer NOT NULL,
	"updatedAt" DATE NOT NULL,
	"updatedBy" integer NOT NULL,
	CONSTRAINT "Room_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Amenity" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL,
	"description" TEXT NOT NULL,
	"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"createdBy" integer NOT NULL,
	"updatedAt" DATE NOT NULL,
	"updatedBy" integer NOT NULL,
	CONSTRAINT "Amenity_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "RoomAmenity" (
	"id" serial NOT NULL,
	"roomId" integer NOT NULL,
	"amenityId" integer NOT NULL,
	"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"createdBy" integer NOT NULL,
	"updatedAt" DATE NOT NULL,
	"updatedBy" integer NOT NULL,
	CONSTRAINT "RoomAmenity_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Hotel" (
	"id" serial NOT NULL,
	"hotelName" varchar NOT NULL,
	"description" TEXT NOT NULL,
	"geolocation" varchar NOT NULL,
	"mainPic" varchar NOT NULL,
	"address" varchar NOT NULL,
	"city" varchar NOT NULL,
	"locationId" integer NOT NULL,
	"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"createdBy" integer NOT NULL,
	"updatedAt" DATE NOT NULL,
	"updatedBy" integer NOT NULL,
	CONSTRAINT "Hotel_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "PropertyImage" (
	"id" serial NOT NULL,
	"imagePath" varchar NOT NULL,
	"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"createdBy" integer NOT NULL,
	"updatedAt" DATE NOT NULL,
	"updatedBy" integer NOT NULL,
	CONSTRAINT "PropertyImage_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "RoomPropertyImage" (
	"id" serial NOT NULL,
	"roomId" integer NOT NULL,
	"propertyImageId" integer NOT NULL,
	"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"createdBy" integer NOT NULL,
	"updatedAt" DATE NOT NULL,
	"updatedBy" integer NOT NULL,
	CONSTRAINT "RoomPropertyImage_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "RoomBooking" (
	"id" serial NOT NULL,
	"firstName" varchar NOT NULL,
	"lastName" varchar NOT NULL,
	"email" varchar NOT NULL,
	"paymentCard" TEXT NOT NULL,
	"fromDate" DATE NOT NULL,
	"toDate" DATE NOT NULL,
	"price" DECIMAL NOT NULL,
	"roomId" integer NOT NULL,
	CONSTRAINT "RoomBooking_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Room" ADD CONSTRAINT "Room_fk0" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id");


ALTER TABLE "RoomAmenity" ADD CONSTRAINT "RoomAmenity_fk0" FOREIGN KEY ("roomId") REFERENCES "Room"("id");
ALTER TABLE "RoomAmenity" ADD CONSTRAINT "RoomAmenity_fk1" FOREIGN KEY ("amenityId") REFERENCES "Amenity"("id");

ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_fk0" FOREIGN KEY ("locationId") REFERENCES "Location"("id");


ALTER TABLE "RoomPropertyImage" ADD CONSTRAINT "RoomPropertyImage_fk0" FOREIGN KEY ("roomId") REFERENCES "Room"("id");
ALTER TABLE "RoomPropertyImage" ADD CONSTRAINT "RoomPropertyImage_fk1" FOREIGN KEY ("propertyImageId") REFERENCES "PropertyImage"("id");

ALTER TABLE "RoomBooking" ADD CONSTRAINT "RoomBooking_fk0" FOREIGN KEY ("roomId") REFERENCES "Room"("id");