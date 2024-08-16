/*
  Warnings:

  - Added the required column `name` to the `credential` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `credential` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "credential" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
