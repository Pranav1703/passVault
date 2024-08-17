-- DropForeignKey
ALTER TABLE "credential" DROP CONSTRAINT "credential_collectionId_fkey";

-- AddForeignKey
ALTER TABLE "credential" ADD CONSTRAINT "credential_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
