/*
  Warnings:

  - You are about to drop the `Collection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Credential` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Credential" DROP CONSTRAINT "Credential_collectionId_fkey";

-- DropTable
DROP TABLE "Collection";

-- DropTable
DROP TABLE "Credential";

-- CreateTable
CREATE TABLE "credential" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "collectionId" INTEGER NOT NULL,

    CONSTRAINT "credential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collection" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "collection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "collection_name_key" ON "collection"("name");

-- AddForeignKey
ALTER TABLE "credential" ADD CONSTRAINT "credential_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
