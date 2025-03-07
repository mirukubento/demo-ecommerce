/*
  Warnings:

  - You are about to drop the column `banber` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "banber",
ADD COLUMN     "banner" TEXT;
