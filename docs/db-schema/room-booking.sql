CREATE TABLE "public.listing" (
	"id" integer NOT NULL DEFAULT 'as',
	"name" varchar NOT NULL,
	"description" TEXT NOT NULL,
	"firstpic" varchar NOT NULL,
	"category" varchar NOT NULL,
	"createdat" DATE NOT NULL,
	"createdby" integer NOT NULL,
	"updatedat" DATE NOT NULL,
	"updatedby" integer NOT NULL,
	CONSTRAINT "listing_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





