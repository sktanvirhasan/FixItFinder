/*
  Warnings:

  - Changed the type of `profileImage` on the `technician` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "technician" DROP COLUMN "profileImage",
ADD COLUMN     "profileImage" BYTEA NOT NULL;