/*
  Warnings:

  - Added the required column `subtype` to the `RseQuizzQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RseQuizzQuestion" ADD COLUMN     "subtype" INTEGER NOT NULL;
