DROP TABLE contact;

-- CreateTable
CREATE TABLE "contact" (
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);