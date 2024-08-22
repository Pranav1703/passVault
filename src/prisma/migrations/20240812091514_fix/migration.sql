/*
  Warnings:

  - You are about to drop the column `relationid` on the `Credential` table. All the data in the column will be lost.
  - Added the required column `collectionId` to the `Credential` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Credential" DROP CONSTRAINT "Credential_relationid_fkey";

-- AlterTable
ALTER TABLE "Credential" DROP COLUMN "relationid",
ADD COLUMN     "collectionId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Credential" ADD CONSTRAINT "Credential_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
